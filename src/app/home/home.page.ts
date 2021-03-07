import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from '../firebase.service';
//import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;
  productTransactions: any;
  constructor(
    public firebaseService: FirebaseService,
    public alertController: AlertController
  ) {
    this.firebaseService.get_transactions().subscribe((res:any) => {
      this.productTransactions = res.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          type: e.payload.doc.data()['type'.toString()],
          title: e.payload.doc.data()['title'.toString()],
          subTitle: e.payload.doc.data()['subTitle'.toString()],
          amount: e.payload.doc.data()['amount'.toString()],
        };
      })
      console.log(this.productTransactions);
    },(err:any) => {
      console.log(err);
    })
  }

  // delete_transaction(transactionId){
  //   this.firebaseService.delete_transaction(transactionId).then((res: any) =>{
  //     console.log(res);
  //   })
  // }

  async delete_transaction(transactionId) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Do you want to delete?',
      buttons: [
        {
          text: 'Yes!!',
          handler: (blah) => {
            console.log('Confirm delete!!');
            this.firebaseService.delete_transaction(transactionId);
          }
        }, {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel : blah ');
          }
        }
      ]
    });
  
    await alert.present();
  }
}

