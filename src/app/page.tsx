/*eslint-disable*/
"use client"
import Button from "@/components/button"
import Link from "next/link"
import { useState } from "react"


export default function Formulaire(){
  const rounded='rounded-lg p-4'
  const mytext = 'text-lg '
  const [formData, setFormData]=useState({
    numero:'',
    societe:'',
    nom:'',
    prenom:'',
    email:'',
    montant:''
  });
  const [errors, setErrors]= useState({
    numero:false,
    societe:false,
    nom:false,
    prenom:false,
    email:false,
    montant:false
  });
  const handleChange=(e:any)=>{
    const {name,value}=e.target;
    setFormData({...formData, [name]:value});
  };
  const handleSubmit=(e:any)=>{
    e.preventDefault()
    const{numero, societe,nom,prenom,email,montant} = formData

    // Vérifier si les chaps sont vides ou pas...
    const newErrors = {
      numero:numero.trim()==='',
      societe:societe.trim()==='',
      nom:nom.trim()==='',
      prenom:prenom.trim()==='',
      email:email.trim()==='',
      montant:montant.trim()===''
    };
    setErrors(newErrors);
    if(!newErrors.numero && !newErrors.societe && newErrors.nom && newErrors.prenom && newErrors.email && newErrors.montant){
      console.log('Yes');
    }

  };

  return(<div className="gratest_div">

          <form action="" onSubmit={handleSubmit} className="form mx-auto" > 
              <div className="div_recouvrement">
                <h3 className="font-bold  text-blue-500 text-2xl">Recouvrement</h3>
                <p className="debiteur">Ajouter un nouveau débiteur/débitrice</p>
              </div> 
          
              <hr className="border-gray-300 p-2" />
              <div className="couple_div_line">
                <div className="one-div w-2/4">
                  <label htmlFor="numero" className='div_names'>Numéro de Facture</label><br />
                  <input name="numero" className='my_input' onChange={handleChange} placeholder=" 0002348572" type="text" value={formData.numero} />
                  {errors.numero && <span className="">Le champ Numéro est requis </span>}
                </div>
                
                <div className="one_div">
                  <label htmlFor="societe" className="div_names">Société</label><br />
                  <input name="societe" className="my_input" value={formData.prenom} onChange={handleChange}  placeholder=" inovaPulse" type="text" />
                  {errors.societe && <span> Le champ Societe est requis </span>}
                </div>
              </div>
            
            
              <div className="couple_div_line">
                <div className='one_div'>
                  <label htmlFor="nom" className="div_names">Nom</label><br />
                  <input name="nom" className="my_input" onChange={handleChange}  value={formData.nom} placeholder=" Doe" type="text" />
                  {errors.nom && <span> Le champ Nom est requis </span>}
                </div>
                
                <div className='one_div'>
                  <label className="div_names" htmlFor="prenom">Prénom</label><br />
                  <input name="prenom" className="my_input" onChange={handleChange}  placeholder=" John" type="text" value={formData.prenom} />
                  {errors.prenom && <span> Le champ de l'email est requis </span>}

                </div>
                
              </div>

            

            
              <div className="couple_div_line">
                <div className='one_div'>
                  <label className="div_names" htmlFor="email">Email de Rappel</label><br />
                  <input name="email" className="my_input" onChange={handleChange}  value={formData.email} placeholder=" johndoe@gmail.com" type="email" />
                  {errors.email && <span> Le champ de l'email est requis</span>}
                </div>
                <div className='one_div'>
                  <label className="div_names" htmlFor="montant">Montant dû(£)</label><br />
                  <input name="montant" className="my_input" onChange={handleChange}  placeholder=" 800" value={formData.montant} type="text" />
                  {errors.montant && <span>Le champ Montant est requis. </span>}
                </div>
                
              </div>
            

            

            <div>
              <div className='p-5 mr-4 ml-4 w-9/12'>
                <label className={mytext} htmlFor="facture">Ajouter la Facture</label>
                <div className="w-full rounded-lg flex h-20 items-center flex-col  bg-gray-200 border-2 border-blue-700 border-dashed">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                  </svg>
                  <p className="">Glisser et Déposer un fichier ou <Link className="text-blue-600" href={'/'}>Téléverser</Link></p>
                  
                </div>
              </div>             
            </div>     

            <div className='div_buttons'>
              <Button  label="Enregistrer" classname="save_button"Type={"submit"}></Button>
              <Button label="Annuler" classname="cancel_button" Type={"reset"}></Button> 
            </div>
            
          </form>
      </div>
)};
  
