import { Component }    from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
	selector: 'app-alert-dialog',
	templateUrl: './alert-dialog.component.html',
	styleUrls: ['../css/dialog.component.scss']
})
export class AlertDialogComponent {
	public title: string;
	public content: string;
	public ok: string;

	constructor(public dialogRef: MatDialogRef<AlertDialogComponent>) {}
}