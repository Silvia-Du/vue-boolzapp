/*
Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse

Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato
Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti

*/

const app = new Vue({

  el: '#app',

  data: {
    
    contacts:[
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Hai portato a spasso il cane?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Ricordati di stendere i panni',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 16:15:22',
                    message: 'Tutto fatto!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
                {
                    date: '20/03/2020 16:30:00',
                    message: 'Ciao come stai?',
                    status: 'sent'
                },
                {
                    date: '20/03/2020 16:30:55',
                    message: 'Bene grazie! Stasera ci vediamo?',
                    status: 'received'
                },
                {
                    date: '20/03/2020 16:35:00',
                    message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
                {
                    date: '28/03/2020 10:10:40',
                    message: 'La Marianna va in campagna',
                    status: 'received'
                },
                {
                    date: '28/03/2020 10:20:10',
                    message: 'Sicuro di non aver sbagliato chat?',
                    status: 'sent'
                },
                {
                    date: '28/03/2020 16:15:22',
                    message: 'Ah scusa!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro B.',
            avatar: '_4',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Lo sai che ha aperto una nuova pizzeria?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Si, ma preferirei andare al cinema',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Alessandro L.',
            avatar: '_5',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ricordati di chiamare la nonna',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Va bene, stasera la sento',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Claudia',
            avatar: '_6',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao Claudia, hai novità?',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Non ancora',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'Nessuna nuova, buona nuova',
                    status: 'sent'
                }
            ],
        },
        {
            name: 'Federico',
            avatar: '_7',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Fai gli auguri a Martina che è il suo compleanno!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'Grazie per avermelo ricordato, le scrivo subito!',
                    status: 'received'
                }
            ],
        },
        {
            name: 'Davide',
            avatar: '_8',
            visible: true,
            messages: [
                {
                    date: '10/01/2020 15:30:55',
                    message: 'Ciao, andiamo a mangiare la pizza stasera?',
                    status: 'received'
                },
                {
                    date: '10/01/2020 15:50:00',
                    message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                    status: 'sent'
                },
                {
                    date: '10/01/2020 15:51:00',
                    message: 'OK!!',
                    status: 'received'
                }
            ],
        }
    ],

    userProfile: {

        name:'Silvia Dudi',
        avatar: '_io',
    },

    botMessages: [

        'eh immagino, ma tu come stai', 

        'I vincenti trovano strade, i perdenti trovano scuse', 

        'Feel the fear and do it anyway',
        
        'una frase molto saggia'
    ],

    tipedLetter: '',
    newMessage:'',
    activeContact: 1,
    clickedDropDown : -1,
    show : false, 
  },

  methods:{

      openDropdown(index){
        this.clickedDropDown = index;
        show = true; 
      },

    //   apriti solo se è vero che index è uguale a quello active

    //   delateMessage(index){
    //    console.log(index, 'index prima');
    //    const allMessages = this.contacts[this.activeContact].messages;
    //    allMessages.splice(index, 1)
    //    console.log(allMessages.length, 'lunghezza arraym');
       
       
    //   },

      getIndex(contact){
        const {name, avatar, visible, messages} = contact;
        return contact.messages.length -1;
      },

      getActiveContact(index){
        this.activeContact = index; 
      },

      getNewMessage(){

        const message = {
            date: `${this.getDate()} ${this.getHour()}`,
            message: this.newMessage,
            status: 'sent'
        }

        this.contacts[this.activeContact].messages.push(message);

        this.newMessage ='';

        setTimeout(()=>{
            const botMessage = {
                date: `${this.getDate()} ${this.getHour()}`,
                message: this.botMessages[this.randomNum( 0 , this.botMessages.length -1 )],
                status: 'received'
            }
            this.contacts[this.activeContact].messages.push(botMessage);

        },1000);
      },

      randomNum( min , max ){
        return Math.floor(Math.random() * (max - min +1) + min);
      },

      //voglio che solo il dropdown del messaggio cliccato diventi visible.
      //allora devo usare una classe che do al messaggio, non a tutti.








      //questa funzione genera un orario random di accesso per l'utente...nel mondo reale sarebbe un dato che viene richiamato immagino.
      getRandomAccess(){
        let hour = this.randomNum( 0 , 23 );
        let min = this.randomNum( 0 , 59 );
        if(hour < 10){
            hour = '0'+ hour;
        }
        //li ho dovuti separare se no dava un bug
        if(min < 10){
            min = '0'+ min;
        }
        return `${hour}:${min}`;
      },

      getDate(){
        const now = new Date();
        let day = now.getDay();
        let month = now.getMonth();
        if(now.getDay()< 10 || now.getMonth()< 10){
          day = `0${day}`;
          month = `0${month}`;
        }
        return `${day}/${month}/${now.getFullYear()}`
      },
  
      getHour(){
        const now = new Date();
        let h = now.getHours(); 
        let m = now.getMinutes(); 
        let s = now.getSeconds();
        if(h < 10 || m < 10 || s < 10){
          h= `0${h}`;
          m= `0${m}`;
          s= `0${s}`;
        }
        return `${h}/${m}/${s}`;
      }
 
    }

})


