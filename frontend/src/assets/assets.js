import logo from './logo.png';
import hero_b1 from './hero_b1.jpg';
import hero_b2 from './hero_b2.jpg';
import hero_b3 from './hero_b3.jpg';
import hero_b4 from './hero_b4.jpg';
import s_1 from './s_1.jpg';
import s_2 from './s_2.jpg';
import s_3 from './s_3.jpg';
import F_1 from './F_1.jpg';
import F_2 from './F_2.jpg';
import F_3 from './F_3.jpg';
import ab_b from './ab_b.jpg';
import conatct from './conatct.jpg';
import HeroBanner from './About_Blog_Banner.png';
import HeroBanner2 from './Stick-Files-Banner.png';
import HeroBanner3 from './Zip-Files.png';
import HeroBanner4 from './Spiral-Books.jpg';
import about_blog_banner from './About_Blog_Banner.png';
import banner_1 from './Banner-1.png';
import banner_2 from './Banner-2.png';
import banner_3 from './Banner-3.png'; 
import banner_11 from './banner_1.png'; 


//scrolling
 import ButtonFiles from './scrolling/ButtonFiles.png';
 import ClothBags from './scrolling/ClothBags.png';
 import DesignPouch from './scrolling/DesignPouch.png';
 import DocumentFiles from './scrolling/DocumentFiles.png';
 import Files from './scrolling/Files0.png';
 import OfficeFiles from './scrolling/OfficeFiles.png';
 import PocketExpandingFiles from './scrolling/PocketExpandFiles.png';
 import ReportFiles from './scrolling/ReportFiles.png';
 import SatinClothZipperPoch from './scrolling/SatinClothZipperPoch.png';
 import ZipFiles from './scrolling/ZipFiles.png';

//categories

import c_1 from './bussiness_card_folder.webp';
import c_2 from './certificate_folder.webp';
import c_3 from './document_file_folder.webp';
import c_4 from './document_gag.webp';
import c_5 from './strip_file.webp';
import c_6 from './file_folder.webp';
import c_7 from './display_book_folder.webp';

//collection
import doc_1 from './doc_1.webp';
import doc_2 from './doc_2.webp';
import doc_3 from './doc_3.webp';
import doc_4 from './doc_4.webp';
import doc_5 from './doc_5.webp';
import doc_6 from './doc_6.webp';
import doc_7 from './doc_7.webp';
import doc_8 from './doc_8.webp';
import doc_9 from './doc_9.webp';
import doc_10 from './doc_10.webp';
import st_1 from './st_1.webp';
import st_2 from './st_2.webp';
import st_3 from './st_3.webp';
import st_4 from './st_4.webp';
import st_5 from './st_5.webp';
import ff_1 from './ff_1.webp';
import ff_2 from './ff_2.webp';
import ff_3 from './ff_3.webp';
import ff_4 from './ff_4.webp';
import ff_5 from './ff_5.webp';
import ff_6 from './ff_6.webp';
import ff_7 from './ff_7.webp';
import ff_8 from './ff_8.webp';
import dg_1 from './dg_1.webp';
import dg_2 from './dg_2.webp';
import dg_3 from './dg_3.webp';
import dg_4 from './dg_4.webp';
import ct_1 from './c_1.webp';
import ct_2 from './c_2.webp';
import ct_3 from './c_3.webp';
import db_1 from './db_1.webp';
import ot_1 from './ot_1.webp';
import ot_2 from './ot_2.webp';
import ot_3 from './ot_3.webp';
import ot_4 from './ot_4.webp';
import ot_5 from './ot_5.webp';
import g_1 from './g_1.jpg';
import g_2 from './g_2.jpg';
import g_3 from './g_3.jpg';
import g_4 from './g_4.jpg';
import g_5 from './g_5.jpg';
import g_6 from './g_6.jpg';



//pngs
import box_files from './box_files.png';
import button_files from './button_files.png';
import certificate_files from './certificate_files.png';
import clip_files from './clip_files.png';
import cloth_cone_envelopes from './cloth_cone_envelopes.png';
import cloth_lined_zipper_bratch from './cloth_lined_zipper_bratch.png';
import conference_pads from './conference_pads.png';
import document_bags from './document_bags.png';
import expanding_files from './expanding_files.png';
import l_shape_folders from './l_shape_folders.png';
import plastic_Lined_zipper_bratch from './plastic_Lined_zipper_bratch.png';
import pocket_books from './pocket_books.png';
import report_files from './report_files.png';
import scribbling_books from './scribbling_books.png';
import security_bags from './security_bags.png';
import sheet_protectors from './sheet_protectors.png';
import spirac_books from './spirac_books.png';
import spiral_books from './Spiral-Books.jpg';
import strip_files from './strip_files.png';
import zip_files from './Zip-Files.png';
import zipper_bags from './zipper_bags.png';








export const category = [
  {
    _id: 1,
    name: "documentbag", // ✅ DB value
    label: "Document Bag", // ✅ user-friendly label
    image: document_bags
  },
  {
    _id: 2,
    name: "buttonfiles",
    label: "Button Files",
    image: button_files
  },
  {
    _id: 3,
    name: "certificates",
    label: "Certificates",
    image: certificate_files
  },
  {
    _id: 4,
    name: "zipfiles",
    label: "Zip Files",
    image: zip_files
  },
  {
    _id: 5,
    name: "stripfiles",
    label: "Strip Files",
    image: strip_files
  },
  {
    _id: 6,
    name: "sheetprotectors",
    label: "Sheet Protectors",
    image: sheet_protectors
  },
  {
    _id: 7,
    name: "displaybook",
    label: "Display Book",
    image: pocket_books
  },
  {
    _id: 8,
    name: "hitechfiles",
    label: "Hi Tech Files",
    image: spiral_books
  }
];

// Example sizes (adjust to your DB values)
export const sizes = [
  { _id: 1, name: "A7" },
  { _id: 2, name: "A6" },
  { _id: 3, name: "A5" },
  { _id: 4, name: "A4" },
  { _id: 5, name: "A3" },
  { _id: 6, name: "A2" },
  { _id: 7, name: "A1" },
  { _id: 8, name: "F/C" },
];



export const collection =[

]



//document file folders,stripFiles,fileFolders, DocumentTags,CheckBook


export const assets = {
  logo,
  hero_b1,
  hero_b2,
  hero_b3,
  hero_b4,
  banner_1,
  banner_2,
  banner_3,
  banner_11,
  s_1,
  s_2,
  s_3,
  F_1,
  F_2,
  F_3,
  ab_b,
  conatct,
  g_1,
  g_2,
  g_3,
  g_4,
  g_5,
  g_6,
  HeroBanner,
  HeroBanner2,
  HeroBanner3,
  HeroBanner4,
  about_blog_banner,


  box_files,
  button_files,
  certificate_files,
  clip_files,
  cloth_cone_envelopes,
  cloth_lined_zipper_bratch,
  conference_pads,
  document_bags,
  expanding_files,
  l_shape_folders,
  plastic_Lined_zipper_bratch,
  pocket_books,
  report_files,
  scribbling_books,
  security_bags,
  sheet_protectors,
  spirac_books,
  spiral_books,
  strip_files,
  zip_files,
  zipper_bags,


  ButtonFiles,
  ClothBags,
  DesignPouch,
  DocumentFiles,
  Files,
  OfficeFiles,
  ReportFiles,
  ZipFiles,
  PocketExpandingFiles,
  SatinClothZipperPoch,
  
}
