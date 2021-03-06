
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
                    message: 'Ciao Claudia, hai novit???',
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
                    message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
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
                    message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
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

        'Eila! ?? da un po che non ci sentiamo!',

        'I vincenti trovano strade, i perdenti trovano scuse', 

        'sono contento di sentirti!',
        
        'assi? ti va se ci vediamo?'
    ],
    now : dayjs().format('DD/ MM/ YYYY HH:mm:ss'),
    tipedLetter: '',
    newMessage:'',
    activeContact: 1,
    clickedDropDown : -1,
  },

  methods:{

      delateMessage(index){

        this.contacts[this.activeContact].messages.splice(index,1);

      },

      /**
       * restituisce l'indice dell'ultimo elemento di un'array
       * @param {string} contact 
       * @returns 
       */
      getIndex(contact){
        return contact.messages.length -1;
      },

      /**
       * Assegnazione del valore di index ad una variabile, per la selezione di un'elemento
       * @param {num} index 
       */
      getActiveContact(index){
        this.activeContact = index; 
      },

      /**
       * Genera un nuovo messaggio utente e una successiva risposta automatica
       */
      getNewMessage(){
        const message = {
            date: this.now,
            message: this.newMessage,
            status: 'sent'
        }

        this.contacts[this.activeContact].messages.push(message);

        this.newMessage ='';

        setTimeout(()=>{
            const botMessage = {
                date: this.now,
                message: this.botMessages[this.randomNum( 0 , this.botMessages.length -1 )],
                status: 'received'
            }
            this.contacts[this.activeContact].messages.push(botMessage);

        },1000);
      },

      /**
       * Generatore di un numero randomico da un minimo ad un amssimo
       * @param {num} min 
       * @param {num} max 
       * @returns 
       */
      randomNum( min , max ){     
        return Math.floor(Math.random() * (max - min +1) + min);
      },


    //   audioPlay(){
    //       const audio = new Audio(url);
    //       audio.play();
    //   }

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
      }
 
    }

})


