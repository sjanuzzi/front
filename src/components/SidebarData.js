import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';
import * as ImIcons from 'react-icons/im';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
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
    path: '/documento',
    icon: <HiIcons.HiOutlineDocument />,
    cName: 'nav-text'
  },
  {
    title: 'Fotos',
    path: '/foto',
    icon: <MdIcons.MdPhoto />,
    cName: 'nav-text'
  },
  {
    title: 'Comercial',
    path: '/comercial',
    icon: <MdIcons.MdBusinessCenter />,
    cName: 'nav-text'
  },
  {
    title: 'Financeiro',
    path: '/financeiro',
    icon: <FaIcons.FaRegMoneyBillAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Cronograma',
    path: '/cronograma',
    icon: <ImIcons.ImParagraphLeft />,
    cName: 'nav-text'
  },
  {
    title: 'Configurações',
    path: '/configuracao',
    icon: <FaIcons.FaTools/>,
    cName: 'nav-text'
  },
  {
    title: 'Comunicado',
    path: '/comunicado',
    icon: <HiIcons.HiOutlineMail />,
    cName: 'nav-text'
  }
];
