import Stat from "./statut1_email"
import Statt from "./statut2_email"
import Link from "next/link"
// import Button from "./button"
export default function Table(){
    return(
        <div>
            <table className="w-11/12 border mx-auto ">
                
                <thead className="font-bold m-auto">
                    <tr className="m-auto table_th">  
                        <th className="w-2/12 "><p className="ent_facture">Facture</p> </th>
                        <th className="w-2/12"><p className="ent_societe">Société</p> </th>
                        <th className="w-3/12"><p className="ent_debiteur">Débiteur / Débitrice</p></th>
                        <th className="w-2/12"><p className="ent_montant">Montant</p></th>
                        <th className="w-2/12 "><p className="ent_email">Email</p></th>
                        <th className="w-/12 " ><p className="ent_email"></p> </th>      
                    </tr>
                </thead>
                <tbody>
                    <tr className=" table_row_white my_tr">
                            <td className=" text-center"><p className="style_facture">237445704</p></td>
                            <td className=" text-center"><p className="inovapulse"> InovaPulse</p></td>
                            <td className=" text-center"><div>
                                <p className="p_nom_style "><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" montant">€53,18</td>
                            <td className=" text-center"><Stat><p className="en_attente">En attente</p></Stat></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg><Link href={'/'}><p className="voir_facture">Voir la facture</p></Link>
                            </button></td>
                    </tr>
                    <tr className="table_row_white row_color my_tr">
                            <td className=" text-center"><p className="style_facture">237445704</p></td>
                            <td className=" text-center"><p className="inovapulse"> InovaPulse</p></td>
                            <td className=" text-center"><div>
                                <p className="p_nom_style "><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" montant">€53,18</td>
                            <td className=" text-center"><Statt><p className="envoye">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}><p className="voir_facture">Voir la facture</p></Link>
                            </button></td>
                    </tr>
                    <tr className="table_row_white my_tr">
                            <td className=" text-center"><p className="style_facture">237445704</p></td>
                            <td className=" text-center"><p className="inovapulse"> InovaPulse</p></td>
                            <td className=" text-center"><div>
                                <p className="p_nom_style "><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" montant">€53,18</td>
                            <td className=" text-center"><Statt><p className="envoye">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}><p className="voir_facture">Voir la facture</p></Link>
                            </button></td>
                    </tr>
                    <tr className="table_row_white row_color my_tr">
                            <td className=" text-center"><p className="style_facture">237445704</p></td>
                            <td className=" text-center"><p className="inovapulse"> InovaPulse</p></td>
                            <td className=" text-center"><div>
                                <p className="p_nom_style "><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" montant">€53,18</td>
                            <td className=" text-center"><Statt><p className="envoye">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}><p className="voir_facture">Voir la facture</p></Link>
                            </button></td>
                    </tr>
                    <tr className="table_row_white my_tr">
                            <td className=" text-center"><p className="style_facture">237445704</p></td>
                            <td className=" text-center"><p className="inovapulse"> InovaPulse</p></td>
                            <td className=" text-center"><div>
                                <p className="p_nom_style "><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" montant">€53,18</td>
                            <td className=" text-center"><Statt><p className="envoye">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}><p className="voir_facture">Voir la facture</p></Link>
                            </button></td>
                    </tr>
                    <tr className="table_row_white row_color my_tr">
                            <td className=" text-center"><p className="style_facture">237445704</p></td>
                            <td className=" text-center"><p className="inovapulse"> InovaPulse</p></td>
                            <td className=" text-center"><div>
                                <p className="p_nom_style "><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" montant">€53,18</td>
                            <td className=" text-center"><Statt><p className="envoye">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}><p className="voir_facture">Voir la facture</p></Link>
                            </button></td>
                    </tr>
                    <tr className="table_row_white my_tr">
                            <td className=" text-center"><p className="style_facture">237445704</p></td>
                            <td className=" text-center"><p className="inovapulse"> InovaPulse</p></td>
                            <td className=" text-center"><div>
                                <p className="p_nom_style "><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" montant">€53,18</td>
                            <td className=" text-center"><Statt><p className="envoye">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}><p className="voir_facture">Voir la facture</p></Link>
                            </button></td>
                    </tr>
                    <tr className="table_row_white row_color my_tr">
                            <td className=" text-center"><p className="style_facture">237445704</p></td>
                            <td className=" text-center"><p className="inovapulse"> InovaPulse</p></td>
                            <td className=" text-center"><div>
                                <p className="p_nom_style text-center"><b>KPODZO Yannick</b><br />
                                yannick.kpodzo@gmail.com</p><br />
                                </div></td>
                            <td className=" montant">€53,18</td>
                            <td className=" text-center"><Statt><p className="envoye">Envoyé</p></Statt></td>
                            <td className=" text-center"><button className="flex justify-between ml-20 border border-solid border-green-300 rounded-lg pl-2 pr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg><Link href={'/'}> <p className="voir_facture">Voir la facture</p> </Link>
                            </button></td>
                    </tr>
                </tbody>
                
            </table> 

        </div>
    )
};