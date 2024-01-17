import '../App.css'
import { CheckBox, TextCheck, Button,} from '../elements/components';
import { useState, useEffect, useRef } from 'react';
import { DivCheck, Price, DivCheck2, Interior, } from '../style';


declare global {
  interface Window {
    mymodal2: any;
  }
}

function quotePage() {
  const [pressuposts, setPressuposts] = useState<any[]>(['notEmpty',]);
  const [nom, setNom] = useState('');
  const [nomPressupost, setNomPressupost] = useState('')
  const currentDate: any = new Date();
  const hours: number = currentDate.getHours();
  const minutes: number = currentDate.getMinutes();
  const seconds: number = currentDate.getSeconds();
  const formattedTime: string = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  const [index, setIndex] = useState(0);
  const [totalPrice, setPrice] = useState(0);
  const [webChecked, setWebChecked] = useState(Boolean);
  const [seoChecked, setSeoChecked] = useState(Boolean);
  const [adsChecked, setAdsChecked] = useState(Boolean);
  const mymodal2Ref1 = useRef<HTMLDialogElement>(null);
  const mymodal2Ref2 = useRef<HTMLDialogElement>(null);
  const [pag, setPag] = useState(
    Number(window.localStorage.getItem('Pag'))
  );
  const [idm, setIdm] = useState(
    Number(window.localStorage.getItem('Idm'))
  );

  const form = () => {
    const nomInput = document.getElementById('nom') as HTMLInputElement;
    const nomPressupostInput = document.getElementById('nomPressupost') as HTMLInputElement;

    if (nomInput && nomPressupostInput) {
      setNom(nomInput.value);
      setNomPressupost(nomPressupostInput.value);
    }
  };

  const newPressupost = () => {
    const pressupost = {
      nom: `Name Client: ${nom}`,
      nomPressupost: `Name Budget: ${nomPressupost}`,
      web: `Web Page: ${webChecked}`,
      pag: `Number of Pages: ${pag}`,
      idm: `Number of Languages: ${idm}`,
      seo: `Seo Consultancy: ${seoChecked}`,
      ads: `Google Ads: ${adsChecked}`,
      date: `Date Budget: ${formattedTime}`,
      price: `Budget Price: ${totalPrice}€`,
    }
    setPressuposts([...pressuposts, pressupost]);  
    setIndex(index + 1);
    console.log(pressuposts);
  }

  useEffect(() => {
    check();
  }, []);

  useEffect(() => {
    saveData();
    calculateTotalPrice();
  }, [webChecked, seoChecked, adsChecked, pag, idm]);

  const check = () => {
    const web: string = String(window.localStorage.getItem('Web'));
    const seo: any = String(window.localStorage.getItem('Seo'));
    const ads: any = String(window.localStorage.getItem('Ads'));
    if (web == 'true') {
      setWebChecked(true);
    }
    if (ads == 'true') {
      setAdsChecked(true);
    }
    if (seo == 'true') {
      setSeoChecked(true);
    }
  }

  const calculateTotalPrice = () => {
    let sumaPrice = 0;
    if (webChecked) sumaPrice += 500;
    sumaPrice += pag * idm * 30;
    if (!webChecked) sumaPrice -= pag * idm * 30;
    if (seoChecked) sumaPrice += 300;
    if (adsChecked) sumaPrice += 200;

    setPrice(sumaPrice);
  };

  const saveData = () => {
    window.localStorage.setItem("Web", String(webChecked));
    window.localStorage.setItem("Seo", String(seoChecked));
    window.localStorage.setItem("Ads", String(adsChecked));
    window.localStorage.setItem("Pag", String(pag));
    window.localStorage.setItem("Idm", String(idm));
  }

  const isCheckWeb = () => {
    setWebChecked((prevWebChecked) => !prevWebChecked);
  };

  const isCheckSeo = () => {
    setSeoChecked((prevSeoChecked) => !prevSeoChecked);
  };

  const isCheckAds = () => {
    setAdsChecked((prevAdsChecked) => !prevAdsChecked);
  };

  const incrementPages = () => {
    setPag((prevPag) => prevPag + 1);
  };

  const decrementPages = () => {
    if (pag >= 1) setPag((pag) => pag - 1);
  };

  const incrementLanguages = () => {
    setIdm((idm) => idm + 1);
  };

  const decrementLanguages = () => {
    if (idm >= 1) setIdm((idm) => idm - 1);
  };

  const handlePageChange = (change: any) => {
    const value = parseInt(change.target.value);
    setPag(isNaN(value) ? 0 : value);
  };

  const handleLanguageChange = (change: any) => {
    const value = parseInt(change.target.value);
    setIdm(isNaN(value) ? 0 : value);
  };

  return (
    <div className='totalReal'>
      <div id='main2'>
        <h2><u> Form </u></h2>
        <div className='infoForm'>
          <p className='introduction1'><b>In this form you'll have to enter some personal data, which then will be saved with your budget. </b></p>
        </div>
        <div className='inputForm'>
          <h3>Name: </h3>
          <input type="text" className='inpuut' id='nom' placeholder='Your name...' />
        </div>
        <div className='inputForm'>
          <h3>Budget Name</h3>
          <input type="text" className='inpuut' id='nomPressupost' placeholder='Your budget name...' />
        </div>
        <br />
        <button className='boto1' onClick={form}>Save Information</button>
      </div>
      <div className='total'>
        <div id='main'>
          <div>
            <h2><u> Website Budget Generator </u></h2>

            {!webChecked && (
              <DivCheck>
                <CheckBox  type='checkbox' checked={webChecked} change={isCheckWeb} />
                <TextCheck content='A website (500€)' />
              </DivCheck>
            )}
            {webChecked && (
              <>
                <DivCheck>
                  <CheckBox  type='checkbox' checked={webChecked} change={isCheckWeb} />
                  <TextCheck content='A website (500€)' />
                </DivCheck>
                <DivCheck2>
                  <Interior>
                    <Button id='bto' onClick={decrementPages} content='-' />
                    <button className="btn" onClick={() => mymodal2Ref1.current?.showModal()}>ℹ️</button>
                    <dialog id="mymodal" className="modal" ref={mymodal2Ref1}>
                      <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg" id='info'>This is the number of pages that you want in your website.</h3>
                      </form>
                      <form method="dialog" className="modal-backdrop">
                        <button>Close</button>
                      </form>
                    </dialog>&nbsp;&nbsp;&nbsp;
                    <TextCheck content='Num Pages' />
                    &nbsp;&nbsp;&nbsp;
                    <input type="number" className='idmContent' onChange={handlePageChange} id='pag' min={0} value={String(pag)} />
                    <Button id='bto2' onClick={incrementPages} content='+' />
                    
                  </Interior>

                  <Interior>
                    <Button id='bto' onClick={decrementLanguages} content='-' />
                    <button className="btn" onClick={() => mymodal2Ref2.current?.showModal()}>ℹ️</button>
                    <dialog id="mymodal" className="modal" ref={mymodal2Ref2}>
                      <form method="dialog" className="modal-box">
                        <h3 className="font-bold text-lg" id='info'>This is the number of languages that you want in your website.</h3>
                      </form>
                      <form method="dialog" className="modal-backdrop">
                        <button>Close</button>
                      </form>
                    </dialog>&nbsp;&nbsp;&nbsp;
                    <TextCheck content="Num Languages" />&nbsp;&nbsp;&nbsp;
                    <input type="number" className='idmContent' onChange={handleLanguageChange} id='idm' min={0} value={String(idm)} />
                    <Button id='bto2' onClick={incrementLanguages} content='+' />
                  </Interior>
                </DivCheck2>
              </>)}

            <DivCheck>
              <CheckBox type='checkbox' checked={seoChecked} change={isCheckSeo} />
              <TextCheck content='A SEO consultancy (€300)' />
            </DivCheck>

            <DivCheck>
              <CheckBox type='checkbox' checked={adsChecked} change={isCheckAds} />
              <TextCheck content='A Google Ads campaign (€200)' />
            </DivCheck>

            <Price> Total Price: {totalPrice} €</Price>
            <button className='boto1' onClick={newPressupost}>Make Budget</button>
          </div>
        </div>
      </div>
      <div id='main3'>
  <h2><u>History of Budgets</u></h2>
  <p></p>
  <div className='scrollDiv'>
  {pressuposts.map((pressupost) => (
      <div className='divBudget' id={String(index)}>
      <h3>{pressupost.nomPressupost}</h3>
      <h4>{pressupost.nom}</h4>
      <h4>{pressupost.web}</h4>
      <h4>{pressupost.pag}</h4>
      <h4>{pressupost.idm}</h4>
      <h4>{pressupost.seo}</h4>
      <h4>{pressupost.ads}</h4>
      <h4>{pressupost.price}</h4>
      <h4>{pressupost.date}</h4>
      </div>
  ))}
  </div>
</div>



    </div>
  );
}


export default quotePage;

