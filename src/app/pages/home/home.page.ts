import { ActivatedRoute } from '@angular/router';
import { Component, OnInit,ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;


  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3
  };
  public pages: string;
  constructor(private activateRoute: ActivatedRoute
  ) {
    //Item object for Nature
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 'https://firebasestorage.googleapis.com/v0/b/oshop-d5d87.appspot.com/o/lpcSf.png?alt=media&token=a7461fc2-df11-448f-9a4f-11e14dbbdfd1'
        },
        {
          id: 'https://firebasestorage.googleapis.com/v0/b/oshop-d5d87.appspot.com/o/lpdSf.png?alt=media&token=02586466-8a8b-4f86-b99e-ec3f9ea2ad1c'
        },
        {
          id: 'https://firebasestorage.googleapis.com/v0/b/oshop-d5d87.appspot.com/o/jdtSf.png?alt=media&token=71c6cc99-b8f7-4db5-88e7-3105f4e8500a'
        },
        {
          id: 'https://firebasestorage.googleapis.com/v0/b/oshop-d5d87.appspot.com/o/hB.png?alt=media&token=ddae2cf4-d3b1-4d4e-8975-7061bb2040fe'
        },
        {
          id: 'https://firebasestorage.googleapis.com/v0/b/oshop-d5d87.appspot.com/o/sindoni.png?alt=media&token=26c6530a-8a64-493a-afd4-df4b97d9a49d'
        }
      ]
    };
    //Item object for Food
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 324
        },
        {
          id: 321
        },
        {
          id: 435
        },
        {
          id: 524
        },
        {
          id: 235
        }
      ]
    };
    //Item object for Fashion
    this.sliderThree =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 643
        },
        {
          id: 532
        },
        {
          id: 232
        },
        {
          id: 874
        },
        {
          id: 193
        }
      ]
    };
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

  ngOnInit() {

    this.pages = this.activateRoute.snapshot.paramMap.get('id')
  }

}
