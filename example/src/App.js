import React, { Component } from 'react'

import JSGanttComponent from 'react-jsgantt'

export default class App extends Component {
  data;
  data2;

  constructor(props) {
    super(props);
    this.data = this.initialData();

    this.data2 = [{
      'pID': 1,
      'pName': 'Define Chart API v2',
      'pStart': '',
      'pEnd': '',
      'pClass': 'ggroupblack',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 0,
      'pGroup': 1,
      'pParent': 0,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': 'Some Notes text'
    }];

    const vAdditionalHeaders = {
      category: {
        title: 'Category'
      },
      sector: {
        title: 'Sector'
      }
    };


    this.editorOptions = {
      vCaptionType: 'Complete',  // Set to Show Caption : None,Caption,Resource,Duration,Complete,
      vQuarterColWidth: 36,
      vDateTaskDisplayFormat: 'day dd month yyyy', // Shown in tool tip box
      vDayMajorDateDisplayFormat: 'mon yyyy - Week ww', // Set format to display dates in the "Major" header of the "Day" view
      vWeekMinorDateDisplayFormat: 'dd mon', // Set format to display dates in the "Minor" header of the "Week" view
      vLang: this.vLang,
      vUseSingleCell: this.vUseSingleCell,
      vShowRes: parseInt(this.vShowRes, 10),
      vShowCost: parseInt(this.vShowCost, 10),
      vShowComp: parseInt(this.vShowComp, 10),
      vShowDur: parseInt(this.vShowDur, 10),
      vShowStartDate: parseInt(this.vShowStartDate, 10),
      vShowEndDate: parseInt(this.vShowEndDate, 10),
      vShowPlanStartDate: parseInt(this.vShowPlanStartDate, 10),
      vShowPlanEndDate: parseInt(this.vShowPlanEndDate, 10),
      vShowTaskInfoLink: parseInt(this.vShowTaskInfoLink, 10), // Show link in tool tip (0/1)
      // Show/Hide the date for the last day of the week in header for daily view (1/0)
      vShowEndWeekDate: parseInt(this.vShowEndWeekDate, 10),
      vAdditionalHeaders: vAdditionalHeaders,
      vEvents: {
        taskname: console.log,
        res: console.log,
        dur: console.log,
        comp: console.log,
        start: console.log,
        end: console.log,
        planstart: console.log,
        planend: console.log,
        cost: console.log
      },
      vEventsChange: {
        taskname: this.editValue.bind(this, this.data),
        res: this.editValue.bind(this, this.data),
        dur: this.editValue.bind(this, this.data),
        comp: this.editValue.bind(this, this.data),
        start: this.editValue.bind(this, this.data),
        end: this.editValue.bind(this, this.data),
        planstart: this.editValue.bind(this, this.data),
        planend: this.editValue.bind(this, this.data),
        cost: this.editValue.bind(this, this.data)
      },
      vResources: [
        { id: 0, name: 'Anybody' },
        { id: 1, name: 'Mario' },
        { id: 2, name: 'Henrique' },
        { id: 3, name: 'Pedro' }
      ],
      vEventClickRow: console.log,
      vTooltipDelay: this.delay,
      vDebug: this.vDebug === 'true',
      vEditable: this.vEditable === 'true',
      vUseSort: this.vUseSort === 'true',
      vFormatArr: ['Day', 'Week', 'Month', 'Quarter'],
    };
  }


  editValue(list, task, event, cell, column) {
    // tslint:disable-next-line:triple-equals
    const found = list.find(item => item.pID == task.getOriginalID());
    if (!found) {
      return;
    } else {
      found[column] = event ? event.target.value : '';
    }
    console.log(found);
  }

  change() {
    console.log('change:', this.editor);
    console.log('change2:', this.editorTwo);
  }

  setLanguage(lang) {
    this.editorOptions.vLang = lang;
    this.editor.setOptions(this.editorOptions);
  }

  customLanguage() {
    // this.editorOptions.languages = {
    //   'pt-BR': {
    //     'auto': 'Automático testing'
    //   },
    //   'en': {
    //     'auto': 'Auto testing'
    //   }
    // };
    this.editor.setOptions(this.editorOptions);
  }

  changeObject() {
    this.data.randomNumber = Math.random() * 100;
  }

  changeData() {
    this.data = Object.assign({}, this.data,
      { randomNumber: Math.random() * 100 });
  }

  /**
   * Example on how get the json changed from the jsgantt
   */
  getData() {
    // const changedGantt = this.editor.get();
    // console.log(changedGantt);
  }

  render() {
    return (
      <div>
        <JSGanttComponent data={this.data} options={this.editorOptions} />
      </div>
    )
  }


  initialData() {
    return [{
      'pID': 1,
      'pName': 'Define Chart API v1',
      'pStart': '',
      'pEnd': '',
      'pClass': 'ggroupblack',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 0,
      'pGroup': 1,
      'pParent': 0,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': 'Some Notes text'
    },
    {
      'pID': 11,
      'pName': 'Chart Object',
      'pStart': '2017-02-20',
      'pEnd': '2017-02-20',
      'pClass': 'gmilestone',
      'pLink': '',
      'pMile': 1,
      'pRes': 'Shlomy',
      'pComp': 100,
      'pGroup': 0,
      'pParent': 1,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 12,
      'pName': 'Task Objects',
      'pStart': '',
      'pEnd': '',
      'pClass': 'ggroupblack',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Shlomy',
      'pComp': 40,
      'pGroup': 1,
      'pParent': 1,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 121,
      'pName': 'Constructor Proc #1234 of February 2017',
      'pStart': '2017-02-21',
      'pEnd': '2017-03-09',
      'pClass': 'gtaskblue',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian T.',
      'pComp': 60,
      'pGroup': 0,
      'pParent': 12,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 122,
      'pName': 'Task Variables',
      'pStart': '2017-03-06',
      'pEnd': '2017-03-11',
      'pPlanStart': '2017-03-03',
      'pPlanEnd': '2017-03-09',
      'pClass': 'gtaskred',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 60,
      'pGroup': 0,
      'pParent': 12,
      'pOpen': 1,
      'pDepend': 121,
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 123,
      'pName': 'Task by Minute/Hour',
      'pStart': '',
      'pEnd': '',
      'pPlanStart': '2017-03-01',
      'pPlanEnd': '2017-03-15 12:00',
      'pClass': 'gtaskyellow',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Ilan',
      'pComp': 60,
      'pGroup': 0,
      'pParent': 12,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': '',
      'pCost': 1000
    },
    {
      'pID': 124,
      'pName': 'Task Functions',
      'pStart': '2017-03-09',
      'pEnd': '2017-03-29',
      'pClass': 'gtaskred',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Anyone',
      'pComp': 60,
      'pGroup': 0,
      'pParent': 12,
      'pOpen': 1,
      'pDepend': '123SS',
      'pCaption': 'This is a caption',
      'pNotes': null
    },
    {
      'pID': 2,
      'pName': 'Create HTML Shell',
      'pStart': '2017-03-24',
      'pEnd': '2017-03-24',
      'pClass': 'gtaskyellow',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 20,
      'pGroup': 0,
      'pParent': 0,
      'pOpen': 1,
      'pDepend': 122,
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 3,
      'pName': 'Code Javascript',
      'pStart': '',
      'pEnd': '',
      'pClass': 'ggroupblack',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 0,
      'pGroup': 1,
      'pParent': 0,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 31,
      'pName': 'Define Variables',
      'pStart': '2017-02-25',
      'pEnd': '2017-03-17',
      'pClass': 'gtaskpurple',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 30,
      'pGroup': 0,
      'pParent': 3,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 32,
      'pName': 'Calculate Chart Size',
      'pStart': '2017-03-15',
      'pEnd': '2017-03-24',
      'pClass': 'gtaskgreen',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Shlomy',
      'pComp': 40,
      'pGroup': 0,
      'pParent': 3,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 33,
      'pName': 'Draw Task Items',
      'pStart': '',
      'pEnd': '',
      'pClass': 'ggroupblack',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Someone',
      'pComp': 40,
      'pGroup': 2,
      'pParent': 3,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 332,
      'pName': 'Task Label Table',
      'pStart': '2017-03-06',
      'pEnd': '2017-03-09',
      'pClass': 'gtaskblue',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 60,
      'pGroup': 0,
      'pParent': 33,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 333,
      'pName': 'Task Scrolling Grid',
      'pStart': '2017-03-11',
      'pEnd': '2017-03-20',
      'pClass': 'gtaskblue',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 0,
      'pGroup': 0,
      'pParent': 33,
      'pOpen': 1,
      'pDepend': '332',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 34,
      'pName': 'Draw Task Bars',
      'pStart': '',
      'pEnd': '',
      'pClass': 'ggroupblack',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Anybody',
      'pComp': 60,
      'pGroup': 1,
      'pParent': 3,
      'pOpen': 0,
      'pDepend': '',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 341,
      'pName': 'Loop each Task',
      'pStart': '2017-03-26',
      'pEnd': '2017-04-11',
      'pClass': 'gtaskred',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 60,
      'pGroup': 0,
      'pParent': 34,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 342,
      'pName': 'Calculate Start/Stop',
      'pStart': '2017-04-12',
      'pEnd': '2017-05-18',
      'pClass': 'gtaskpink',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 60,
      'pGroup': 0,
      'pParent': 34,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 343,
      'pName': 'Draw Task Div',
      'pStart': '2017-05-13',
      'pEnd': '2017-05-17',
      'pClass': 'gtaskred',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 60,
      'pGroup': 0,
      'pParent': 34,
      'pOpen': 1,
      'pDepend': '',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 344,
      'pName': 'Draw Completion Div',
      'pStart': '2017-05-17',
      'pEnd': '2017-06-04',
      'pClass': 'gtaskred',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 60,
      'pGroup': 0,
      'pParent': 34,
      'pOpen': 1,
      'pDepend': '342,343',
      'pCaption': '',
      'pNotes': ''
    },
    {
      'pID': 35,
      'pName': 'Make Updates',
      'pStart': '2017-07-17',
      'pEnd': '2017-09-04',
      'pClass': 'gtaskpurple',
      'pLink': '',
      'pMile': 0,
      'pRes': 'Brian',
      'pComp': 30,
      'pGroup': 0,
      'pParent': 3,
      'pOpen': 1,
      'pDepend': '333',
      'pCaption': '',
      'pNotes': ''
    }];
  }
}


