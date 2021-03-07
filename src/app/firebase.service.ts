import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  create(arg0: { cssClass: string; header: string; message: string; buttons: ({ text: string; role: string; cssClass: string; handler: (blah: any) => void; } | { text: string; handler: () => void; })[]; }) {
    throw new Error('Method not implemented.');
  }

  collectionName = 'product-track';

  constructor(
    private firestroe: AngularFirestore
  ) { }  

  //read
  get_transactions(){
    return this.firestroe.collection('productTransactions').snapshotChanges();
  }

  //add
  add_transaction(data){
    return this.firestroe.collection('productTransactions').add(data);
  }

  //delete
  delete_transaction(id){
    return this.firestroe.doc('productTransactions/' + id).delete();

  } //edit
  get_single_transaction(id){
    return this.firestroe.collection('productTransactions').doc(id).valueChanges();
    //return this.firestroe.collection(this.collectionName).doc(id).valueChanges();
  }

  //update
  update_transaction(id,data :any){
    return this.firestroe.doc('productTransactions' + '/' +id).update(data);
  }
 }
 