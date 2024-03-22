function Calculator(){
  return{
      display: document.querySelector('.display'),

      //Metodo Start
      start(){
        this.clickButtons();
      },

      // metodo for clear display
      clearDesplay(){
        this.display.value = '';
      },

      // medotodo for click an button
      clickNumber(number){
        this.display.value+=number;
      },
     
      // metodo for delete one number in the display
      deleteOne(){
        this.display.value=this.display.value.slice(0,-1);
      },
     
      // make de calc
      calc(){
        let conta = this.display.value;

      try {
        conta = eval(conta);

        if(!conta) {
          alert('Conta inválida');
          return;
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }

      },

      // metodo qua do clicamos em algum botao para chamar a funçao
      clickButtons(){
        document.addEventListener('click',event=>{
            const element=event.target;

            if(element.classList.contains('btn-clear')){this.clearDesplay();}
            if(element.classList.contains('btn-num')){this.clickNumber(element.innerText);}
            if(element.classList.contains('btn-del')){this.deleteOne();}
            if(element.classList.contains('btn-eq')){this.calc();}
        })
      },
  };
}

const calc=Calculator();
calc.start();