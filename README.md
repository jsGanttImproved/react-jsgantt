# react-jsgantt

> React JS Gantt

[![NPM](https://img.shields.io/npm/v/react-jsgantt.svg)](https://www.npmjs.com/package/react-jsgantt) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

A fully featured gantt chart component built entirely in Javascript, CSS and AJAX. It is lightweight and there is no need of external libraries or additional images.

![Demo Image](/example/demo.gif)

This is a React module for the [jsgantt-improved](https://github.com/jsGanttImproved/jsgantt-improved) library.

You can see a live working example here:
* https://stackblitz.com/edit/react-jsgantt

## Install

```bash
npm install --save react-jsgantt
```

## Usage

```tsx
import * as React from 'react'
import JSGantt from 'react-jsgantt'

function Example() {

    const data = [{
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

    const editorOptions = {
      vCaptionType: 'Complete',  // Set to Show Caption : None,Caption,Resource,Duration,Complete,
      vQuarterColWidth: 36,
      vDateTaskDisplayFormat: 'day dd month yyyy', // Shown in tool tip box
      vDayMajorDateDisplayFormat: 'mon yyyy - Week ww', // Set format to display dates in the "Major" header of the "Day" view
      vWeekMinorDateDisplayFormat: 'dd mon',
    }

    const getData = () => {
      const changedGantt = editor.getList();
      console.log(changedGantt[0].getName());
    };

    const onCreate = (editorcreated) => {
      console.log(editorcreated, '------');
      editor = editorcreated;
    };
      
    return (
        <div>
            <button click={getData}>Get Data</button>

        <JSGanttComponent data={data} 
            options={editorOptions} 
            onCreate={onCreate}
            />
        </div>
    );
}
```

## Developer Guide

Fork this project and following the instructions below:

```sh
npm i -g rollup
npm install
cd example
npm install
# we need to install python2
sudo apt install python2
# or if you have windows, change your path to point to python2
```
to run the demo
npm start in the root folder, and npm start in the example folder
the site will be at: localhost:3000


## License

MIT © [mariohmol](https://github.com/mariohmol)
