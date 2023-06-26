import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  Channel,
  DialogOverviewExampleDialog,
  RequestModel,
} from './dialog-overview-example-dialog';

export interface DialogData {
  //CCs: string[];
  //BCCs: string[];
  object: string;
  comment: string[];
  //selectedFiles: File[];
  //channel: Channel;
  //loaderContainerIds: string[];
  //requests: RequestModel[];
}

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
})
export class DialogOverviewExample {
  data: DialogData;
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '500px',
      data: {
        CCs: [],
        BCCs: [],
        object: '',
        comment: '',
        selectedFiles: [],
        channel: { name: 'channel_name', id: 'channel' },
        requests: [
          {
            id: 'request0_id',
            email_customer: 'mkasmi1997@gmail.com',
          },
        ],
        loaderContainerIds: ['Area-basket'],
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.data = { ...result };
    });
  }
}
