import{ HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import * as Dialog  from '@radix-ui/react-dialog';

import LogoImg from '../../assests/Logo.svg'
import { Newtrasancionmodal } from '../NewTrasancionModal';


export function Header() {
  return (
      <HeaderContainer>
        <HeaderContent>
          <img src={LogoImg} alt="Logo" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
          <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

         <Newtrasancionmodal />
          </Dialog.Root>
        </HeaderContent>
      </HeaderContainer>
  )
}