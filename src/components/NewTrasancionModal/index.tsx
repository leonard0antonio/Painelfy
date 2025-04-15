import * as Dialog  from '@radix-ui/react-dialog';
import { Close, Content, Overlay, TransacTionType, TransacTionTypeButton } from './styles';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';

export function Newtrasancionmodal() {
  return (
    
    <Dialog.Portal>
    <Overlay />

    <Content>
      <Dialog.Title>Nova transação</Dialog.Title>

      <Close>
        <X size={24} color="#8D99AE" aria-label="Fechar" />
      </Close>

      <form action=""> 
        <input type="text" placeholder="Descrição" required />
        <input type="number" placeholder="Valor" required />
        <input type="text" placeholder="Categoria" required />

        <TransacTionType>
       <TransacTionTypeButton variant='income' value='income'>
        <ArrowCircleUp size={24} />
        Entrada
       </TransacTionTypeButton>

       <TransacTionTypeButton variant='outcome' value='outcome'>
        <ArrowCircleDown size={24}  />
        Saida
       </TransacTionTypeButton>


        </TransacTionType>
        
        <button type="submit">Cadastrar</button>
      </form>

      
    </Content >

  </Dialog.Portal >

  )
}