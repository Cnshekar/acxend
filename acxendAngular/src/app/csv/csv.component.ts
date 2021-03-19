import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { CSVRecord } from './CSVModel';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CSVComponent implements OnInit {

  TotalCount: number;
  public records: any[] = [];
  DataList;
  @ViewChild('csvReader', { static: true }) csvReader: any;

  constructor(private apiService: ServiceService) { }

  ngOnInit() {
  }

  uploadListener($event: any): void {  
  debugger;
    let text = [];  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
      };  
  
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  
  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }  
  } 


  Send(){
    debugger;

    this.apiService.postData("this.DataList").subscribe((res) => {
      debugger;
      // this.refreshData();
      // this.showSuccess();
      // this.loading = false;
    },
      (error) => {
        if (error.status == 500) {
          // this.showError();
          // this.loading = false;
        }
      })
  }




  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    debugger;

    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
      if (curruntRecord.length == headerLength) {  
        let csvRecord: CSVRecord = {  
        id : parseInt(curruntRecord[0].trim()), 
        name : curruntRecord[1].trim(),  
        age : parseInt(curruntRecord[2].trim()), 
        city : curruntRecord[3].trim(), 
        } 
        csvArr.push(csvRecord);  
      }  
    }  
    this.TotalCount = csvArr.length;
    this.DataList = csvArr;
    return csvArr;  
  }  

  isValidCSVFile(file: any) {  
    debugger;

    return file.name.endsWith(".csv");  
  }  
  
  getHeaderArray(csvRecordsArr: any) {  
    debugger;

    let headers = (<string>csvRecordsArr[0]).split(',');  
    let headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      headerArray.push(headers[j]);  
    }  
    return headerArray;  
  }  
  
  fileReset() {  
    debugger;

    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  }  




}
