import React, {useState} from 'react'

function Home() {

    const [isActive,setIsactive] = useState('home')
    const [element,setElement] = useState('pyro')
 

      //------------------------------------------------------------------------------------------PAGE FEU----------------------------------------------------------------------------
    if(element === 'pyro'){
    return (
        <div className='home'>
            <div className='sidebar'>
                    <img onClick={()=>setElement('anemo')} className='sidebar__logo' src={element==='anemo'?'../../anemocolored.png':'../../anemo.png'} alt=''></img>
                    <img onClick={()=>setElement('tera')} className='sidebar__logo' src={element==='tera'?'../../teracolored.png':'../../tera.png'} alt=''></img>
                    <img onClick={()=>setElement('foudre')} className='sidebar__logo' src={element==='foudre'?'../../foudrecolored.png':'../../foudre.png'} alt=''></img>
                    <img onClick={()=>setElement('glace')} className='sidebar__logo' src={element==='glace'?'../../glacecolored.png':'../../glace.png'} alt=''></img>
                    <img onClick={()=>setElement('eau')} className='sidebar__logo' src={element==='eau'?'../../eaucolored.png':'../../eau.png'} alt=''></img>
                    <img onClick={()=>setElement('pyro')} className='sidebar__logo' src={element==='pyro'?'../../feucolored.png':'../../feu.png'} alt=''></img>
                </div>
            <div className='home__container'>
{/*---------------------------------------------------------- NAVBAR -------------------------------------------------------------------- */}
            <div className='navbar'>
                <div className='img feu'></div>
                <h2 onClick={()=>setIsactive('home')} style={{color:isActive==='home'?'#E78A4B':'grey'}}>HOME</h2>
                <h2 onClick={()=>setIsactive('guides')} style={{color:isActive==='guides'?'#E78A4B':'grey'}}>GUIDES</h2>
                <h2 onClick={()=>setIsactive('dailies')} style={{color:isActive==='dailies'?'#E78A4B':'grey'}}>DAILIES</h2>
                <h2 onClick={()=>setIsactive('indispensables')} style={{color:isActive==='indispensables'?'#E78A4B':'grey'}}>LES INDISPENSABLES</h2>
                <h2 onClick={()=>setIsactive('news')} style={{color:isActive==='news'?'#E78A4B':'grey'}}>NEWS</h2>
            </div>
{/*---------------------------------------------------------- MAIN ZONE -------------------------------------------------------------------- */}
            <div className='main'>

                

                <div className='main__left'>                
                    <h2>TITRE</h2>
                    <p style={{borderLeft: '4px solid #E78A4B'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corporis consectetur debitis, aperiam commodi reprehenderit perferendis dolore magnam minus, ducimus voluptas amet sunt exercitationem, natus explicabo? Sed, odit labore?</p>
                    <h2>COUPON</h2>
                    <p style={{borderLeft: '4px solid #E78A4B'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corporis consectetur debitis, aperiam commodi reprehenderit perferendis dolore magnam minus, ducimus voluptas amet sunt exercitationem, natus explicabo? Sed, odit labore?</p>
                </div>
                <div className='biglogo'></div>
                <div className='main__right'>

                </div>
            </div>

            </div>
        </div>
    )}
    //------------------------------------------------------------------------------------------PAGE FOUDRE----------------------------------------------------------------------------
    if(element === 'foudre'){
        return (
            <div className='home'>
                <div className='sidebar'>
                        <img onClick={()=>setElement('anemo')} className='sidebar__logo' src={element==='anemo'?'../../anemocolored.png':'../../anemo.png'} alt=''></img>
                        <img onClick={()=>setElement('tera')} className='sidebar__logo' src={element==='tera'?'../../teracolored.png':'../../tera.png'} alt=''></img>
                        <img onClick={()=>setElement('foudre')} className='sidebar__logo' src={element==='foudre'?'../../foudrecolored.png':'../../foudre.png'} alt=''></img>
                        <img onClick={()=>setElement('glace')} className='sidebar__logo' src={element==='glace'?'../../glacecolored.png':'../../glace.png'} alt=''></img>
                        <img onClick={()=>setElement('eau')} className='sidebar__logo' src={element==='eau'?'../../eaucolored.png':'../../eau.png'} alt=''></img>
                        <img onClick={()=>setElement('pyro')} className='sidebar__logo' src={element==='pyro'?'../../feucolored.png':'../../feu.png'} alt=''></img>
                    </div>
                <div className='home__container'>
    {/*---------------------------------------------------------- NAVBAR -------------------------------------------------------------------- */}
                <div className='navbar'>
                    <div className='img foudre'></div>
                    <h2 onClick={()=>setIsactive('home')} style={{color:isActive==='home'?'#826CC2':'grey'}}>HOME</h2>
                    <h2 onClick={()=>setIsactive('guides')} style={{color:isActive==='guides'?'#826CC2':'grey'}}>GUIDES</h2>
                    <h2 onClick={()=>setIsactive('dailies')} style={{color:isActive==='dailies'?'#826CC2':'grey'}}>DAILIES</h2>
                    <h2 onClick={()=>setIsactive('indispensables')} style={{color:isActive==='indispensables'?'#826CC2':'grey'}}>LES INDISPENSABLES</h2>
                    <h2 onClick={()=>setIsactive('news')} style={{color:isActive==='news'?'#826CC2':'grey'}}>NEWS</h2>
                </div>
    {/*---------------------------------------------------------- MAIN ZONE -------------------------------------------------------------------- */}
                <div className='main'>
    
                    
    
                    <div className='main__left'>                
                        <h2>TITRE</h2>
                        <p style={{borderLeft: '4px solid #826CC2'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corporis consectetur debitis, aperiam commodi reprehenderit perferendis dolore magnam minus, ducimus voluptas amet sunt exercitationem, natus explicabo? Sed, odit labore?</p>
                        <h2>COUPON</h2>
                        <p style={{borderLeft: '4px solid #826CC2'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corporis consectetur debitis, aperiam commodi reprehenderit perferendis dolore magnam minus, ducimus voluptas amet sunt exercitationem, natus explicabo? Sed, odit labore?</p>
                    </div>
                    <div className='biglogo_foudre'></div>
                    <div className='main__right_foudre'>
    
                    </div>
                </div>
    
                </div>
            </div>
        )}
    //------------------------------------------------------------------------------------------PAGE ANEMO----------------------------------------------------------------------------
    if(element === 'anemo'){
        return (
            <div className='home'>
                <div className='sidebar'>
                        <img onClick={()=>setElement('anemo')} className='sidebar__logo' src={element==='anemo'?'../../anemocolored.png':'../../anemo.png'} alt=''></img>
                        <img onClick={()=>setElement('tera')} className='sidebar__logo' src={element==='tera'?'../../teracolored.png':'../../tera.png'} alt=''></img>
                        <img onClick={()=>setElement('foudre')} className='sidebar__logo' src={element==='foudre'?'../../foudrecolored.png':'../../foudre.png'} alt=''></img>
                        <img onClick={()=>setElement('glace')} className='sidebar__logo' src={element==='glace'?'../../glacecolored.png':'../../glace.png'} alt=''></img>
                        <img onClick={()=>setElement('eau')} className='sidebar__logo' src={element==='eau'?'../../eaucolored.png':'../../eau.png'} alt=''></img>
                        <img onClick={()=>setElement('pyro')} className='sidebar__logo' src={element==='pyro'?'../../feucolored.png':'../../feu.png'} alt=''></img>
                    </div>
                <div className='home__container'>

                <div className='navbar'>
                    <div className='img anemo'></div>
                    <h2 onClick={()=>setIsactive('home')} style={{color:isActive==='home'?'#57b4ac':'grey'}}>HOME</h2>
                    <h2 onClick={()=>setIsactive('guides')} style={{color:isActive==='guides'?'#57b4ac':'grey'}}>GUIDES</h2>
                    <h2 onClick={()=>setIsactive('dailies')} style={{color:isActive==='dailies'?'#57b4ac':'grey'}}>DAILIES</h2>
                    <h2 onClick={()=>setIsactive('indispensables')} style={{color:isActive==='indispensables'?'#57b4ac':'grey'}}>LES INDISPENSABLES</h2>
                    <h2 onClick={()=>setIsactive('news')} style={{color:isActive==='news'?'#57b4ac':'grey'}}>NEWS</h2>
                </div>

                <div className='main'>
    
                    
    
                    <div className='main__left'>                
                        <h2>TITRE</h2>
                        <p style={{borderLeft: '4px solid #57b4ac'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corporis consectetur debitis, aperiam commodi reprehenderit perferendis dolore magnam minus, ducimus voluptas amet sunt exercitationem, natus explicabo? Sed, odit labore?</p>
                        <h2>COUPON</h2>
                        <p style={{borderLeft: '4px solid #57b4ac'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corporis consectetur debitis, aperiam commodi reprehenderit perferendis dolore magnam minus, ducimus voluptas amet sunt exercitationem, natus explicabo? Sed, odit labore?</p>
                    </div>
                    <div className='biglogo_anemo'></div>
                    <div className='main__right_anemo'>
    
                    </div>
                </div>
    
                </div>
            </div>
        )}
        //------------------------------------------------------------------------------------------PAGE TERA----------------------------------------------------------------------------
        if(element === 'tera'){
            return (
                <div className='home'>
                    <div className='sidebar'>
                            <img onClick={()=>setElement('anemo')} className='sidebar__logo' src={element==='anemo'?'../../anemocolored.png':'../../anemo.png'} alt=''></img>
                            <img onClick={()=>setElement('tera')} className='sidebar__logo' src={element==='tera'?'../../teracolored.png':'../../tera.png'} alt=''></img>
                            <img onClick={()=>setElement('foudre')} className='sidebar__logo' src={element==='foudre'?'../../foudrecolored.png':'../../foudre.png'} alt=''></img>
                            <img onClick={()=>setElement('glace')} className='sidebar__logo' src={element==='glace'?'../../glacecolored.png':'../../glace.png'} alt=''></img>
                            <img onClick={()=>setElement('eau')} className='sidebar__logo' src={element==='eau'?'../../eaucolored.png':'../../eau.png'} alt=''></img>
                            <img onClick={()=>setElement('pyro')} className='sidebar__logo' src={element==='pyro'?'../../feucolored.png':'../../feu.png'} alt=''></img>
                        </div>
                    <div className='home__container'>

                    <div className='navbar'>
                        <div className='img tera'></div>
                        <h2 onClick={()=>setIsactive('home')} style={{color:isActive==='home'?'#D4AD7A':'grey'}}>HOME</h2>
                        <h2 onClick={()=>setIsactive('guides')} style={{color:isActive==='guides'?'#D4AD7A':'grey'}}>GUIDES</h2>
                        <h2 onClick={()=>setIsactive('dailies')} style={{color:isActive==='dailies'?'#D4AD7A':'grey'}}>DAILIES</h2>
                        <h2 onClick={()=>setIsactive('indispensables')} style={{color:isActive==='indispensables'?'#D4AD7A':'grey'}}>LES INDISPENSABLES</h2>
                        <h2 onClick={()=>setIsactive('news')} style={{color:isActive==='news'?'#D4AD7A':'grey'}}>NEWS</h2>
                    </div>

                    <div className='main'>
    
                        <div className='main__left'>                
                            <h2>TITRE</h2>
                            <p style={{borderLeft: '4px solid #D4AD7A'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corporis consectetur debitis, aperiam commodi reprehenderit perferendis dolore magnam minus, ducimus voluptas amet sunt exercitationem, natus explicabo? Sed, odit labore?</p>
                            <h2>COUPON</h2>
                            <p style={{borderLeft: '4px solid #D4AD7A'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corporis consectetur debitis, aperiam commodi reprehenderit perferendis dolore magnam minus, ducimus voluptas amet sunt exercitationem, natus explicabo? Sed, odit labore?</p>
                        </div>
                        <div className='biglogo_tera'></div>
                        <div className='main__right_tera'>
        
                        </div>
                    </div>
        
                    </div>
                </div>
            )}
               //------------------------------------------------------------------------------------------PAGE TERA----------------------------------------------------------------------------
        if(element === 'eau'){
            return (
                <div className='home'>
                    <div className='sidebar'>
                            <img onClick={()=>setElement('anemo')} className='sidebar__logo' src={element==='anemo'?'../../anemocolored.png':'../../anemo.png'} alt=''></img>
                            <img onClick={()=>setElement('tera')} className='sidebar__logo' src={element==='tera'?'../../teracolored.png':'../../tera.png'} alt=''></img>
                            <img onClick={()=>setElement('foudre')} className='sidebar__logo' src={element==='foudre'?'../../foudrecolored.png':'../../foudre.png'} alt=''></img>
                            <img onClick={()=>setElement('glace')} className='sidebar__logo' src={element==='glace'?'../../glacecolored.png':'../../glace.png'} alt=''></img>
                            <img onClick={()=>setElement('eau')} className='sidebar__logo' src={element==='eau'?'../../eaucolored.png':'../../eau.png'} alt=''></img>
                            <img onClick={()=>setElement('pyro')} className='sidebar__logo' src={element==='pyro'?'../../feucolored.png':'../../feu.png'} alt=''></img>
                        </div>
                    <div className='home__container'>

                    <div className='navbar'>
                        <div className='img eau'></div>
                        <h2 onClick={()=>setIsactive('home')} style={{color:isActive==='home'?'#2C99C2':'grey'}}>HOME</h2>
                        <h2 onClick={()=>setIsactive('guides')} style={{color:isActive==='guides'?'#2C99C2':'grey'}}>GUIDES</h2>
                        <h2 onClick={()=>setIsactive('dailies')} style={{color:isActive==='dailies'?'#2C99C2':'grey'}}>DAILIES</h2>
                        <h2 onClick={()=>setIsactive('indispensables')} style={{color:isActive==='indispensables'?'#2C99C2':'grey'}}>LES INDISPENSABLES</h2>
                        <h2 onClick={()=>setIsactive('news')} style={{color:isActive==='news'?'#2C99C2':'grey'}}>NEWS</h2>
                    </div>

                    <div className='main'>
    
                        <div className='main__left'>                
                            <h2>TITRE</h2>
                            <p style={{borderLeft: '4px solid #2C99C2'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corporis consectetur debitis, aperiam commodi reprehenderit perferendis dolore magnam minus, ducimus voluptas amet sunt exercitationem, natus explicabo? Sed, odit labore?</p>
                            <h2>COUPON</h2>
                            <p style={{borderLeft: '4px solid #2C99C2'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corporis consectetur debitis, aperiam commodi reprehenderit perferendis dolore magnam minus, ducimus voluptas amet sunt exercitationem, natus explicabo? Sed, odit labore?</p>
                        </div>
                        <div className='biglogo_eau'></div>
                        <div className='main__right_eau'>
        
                        </div>
                    </div>
        
                    </div>
                </div>
            )}
        //------------------------------------------------------------------------------------------PAGE GLACE----------------------------------------------------------------------------
        if(element === 'glace'){
            return (
                <div className='home'>
                    <div className='sidebar'>
                            <img onClick={()=>setElement('anemo')} className='sidebar__logo' src={element==='anemo'?'../../anemocolored.png':'../../anemo.png'} alt=''></img>
                            <img onClick={()=>setElement('tera')} className='sidebar__logo' src={element==='tera'?'../../teracolored.png':'../../tera.png'} alt=''></img>
                            <img onClick={()=>setElement('foudre')} className='sidebar__logo' src={element==='foudre'?'../../foudrecolored.png':'../../foudre.png'} alt=''></img>
                            <img onClick={()=>setElement('glace')} className='sidebar__logo' src={element==='glace'?'../../glacecolored.png':'../../glace.png'} alt=''></img>
                            <img onClick={()=>setElement('eau')} className='sidebar__logo' src={element==='eau'?'../../eaucolored.png':'../../eau.png'} alt=''></img>
                            <img onClick={()=>setElement('pyro')} className='sidebar__logo' src={element==='pyro'?'../../feucolored.png':'../../feu.png'} alt=''></img>
                        </div>
                    <div className='home__container'>

                    <div className='navbar'>
                        <div className='img glace'></div>
                        <h2 onClick={()=>setIsactive('home')} style={{color:isActive==='home'?'#acc9e1':'grey'}}>HOME</h2>
                        <h2 onClick={()=>setIsactive('guides')} style={{color:isActive==='guides'?'#acc9e1':'grey'}}>GUIDES</h2>
                        <h2 onClick={()=>setIsactive('dailies')} style={{color:isActive==='dailies'?'#acc9e1':'grey'}}>DAILIES</h2>
                        <h2 onClick={()=>setIsactive('indispensables')} style={{color:isActive==='indispensables'?'#acc9e1':'grey'}}>LES INDISPENSABLES</h2>
                        <h2 onClick={()=>setIsactive('news')} style={{color:isActive==='news'?'#acc9e1':'grey'}}>NEWS</h2>
                    </div>

                    <div className='main'>
    
                        <div className='main__left'>                
                            <h2>TITRE</h2>
                            <p style={{borderLeft: '4px solid #acc9e1'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corporis consectetur debitis, aperiam commodi reprehenderit perferendis dolore magnam minus, ducimus voluptas amet sunt exercitationem, natus explicabo? Sed, odit labore?</p>
                            <h2>COUPON</h2>
                            <p style={{borderLeft: '4px solid #acc9e1'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint pariatur corporis consectetur debitis, aperiam commodi reprehenderit perferendis dolore magnam minus, ducimus voluptas amet sunt exercitationem, natus explicabo? Sed, odit labore?</p>
                        </div>
                        <div className='biglogo_glace'></div>
                        <div className='main__right_glace'>
        
                        </div>
                    </div>
        
                    </div>
                </div>
            )}
    

}

export default Home







