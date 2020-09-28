import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as IoDocs from 'react-icons/hi';
import * as Iophoto from 'react-icons/md';
import * as IoIm from 'react-icons/im';
import * as Iogr from 'react-icons/gr';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Cadastro',
    path: '/cadastro',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Documentos',
    path: '/documentos',
    icon: <IoDocs.HiOutlineDocument />,
    cName: 'nav-text'
  },
  {
    title: 'Fotos',
    path: '/fotos',
    icon: <Iophoto.MdPhoto />,
    cName: 'nav-text'
  },
  {
    title: 'Comercial',
    path: '/comercial',
    icon: <Iophoto.MdBusinessCenter />,
    cName: 'nav-text'
  },
  {
    title: 'Financeiro',
    path: '/financeiro',
    icon: <FaIcons.FaRegMoneyBillAlt />,
    cName: 'nav-text'
  }
  ,
  {
    title: 'Cronograma',
    path: '/cronograma',
    icon: <IoIm.ImParagraphLeft />,
    cName: 'nav-text'
  },
  {
    title: 'Configurações',
    path: '/configuracoes',
    icon: <Iogr.GrConfigure />,
    cName: 'nav-text'
  },
  {
    title: 'Comunicado',
    path: '/comunicado',
    icon: <IoDocs.HiOutlineMail />,
    cName: 'nav-text'
  }
];
