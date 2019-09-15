import {Component, OnInit, ViewChild, Input, ElementRef, AfterViewInit, Output, EventEmitter} from '@angular/core';
import Cropper from 'cropperjs';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'image-cropper',
    templateUrl: './image-croppper.component.html',
    styleUrls: ['./image-croppper.component.scss']
})
export class ImageCroppperComponent implements OnInit, AfterViewInit {

    @ViewChild('image', { static: false })
    imageElement: ElementRef;

    @ViewChild('preview', { static: false })
    previewElement: ElementRef;

    // tslint:disable-next-line:no-input-rename
    @Input('src')
    imageSource: any;
    image = 'https://dapp.dblog.org/img/default.jpg';

    @Output() getImage = new EventEmitter<string>();

    // tslint:disable-next-line:max-line-length
    imageDestination = '';
    private cropper: Cropper;

    constructor() {
    }

    ngOnInit() { }

    ngAfterViewInit() {
        this.imageSource.subscribe(value => {
                this.imageElement.nativeElement.src = value;
                this.image = value;
            this.cropper = new Cropper(this.imageElement.nativeElement, {
                zoomable: false,
                scalable: false,
                aspectRatio: 1,
                crop: () => {
                    const canvas = this.cropper.getCroppedCanvas({width: 400, height: 400});
                    const img = canvas.toDataURL();
                    this.previewElement.nativeElement.src = img;
                    this.getImage.emit(img);
                    this.imageDestination = img;
                }
            });
        });
    }

}
