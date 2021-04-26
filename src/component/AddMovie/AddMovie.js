import React, {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import './AddMovie.css'

const AddMovie = ({addNewMovie}) => {
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [title,setTitle]= useState('');
  const [description,setDescription]= useState('');
  const [posterUrl,setPosterUrl]= useState('');
  const [director,setDirector]= useState('');
  const [year,setYear]= useState(0);
  const [duration,setDuration]= useState('');
  const [type,setType]= useState('');
  const [trailer,setTrailer]= useState('');
  const [rate,setRate]= useState(1);
  const [backImg,setBackImg]= useState('');

const handleAdd =(e) => {
let x= {
   id: Math.random(),
   title,
   description,
   posterUrl,
   director,
   year,
   duration,
   type,
   trailer,
   rate,
   backImg
};
addNewMovie(e,x);
setTitle('');
setDescription('');
setPosterUrl('');
setDirector('');
setYear(0);
setDuration('');
setType('');
setTrailer('');
setRate(1);
setShow(false);
setBackImg('');
}


const stars = (rate) => {
   let startsTab = [];
   for (let i=1 ; i<=5; i++){
     if (i<=rate){
         startsTab.push(<span 
                          style={{ color: '#FFC83D', fontSize: '40px',  cursor: 'pointer'}}
                          onClick={() => setRate(i)}
                          >★</span>)
     }
     else {
         startsTab.push(<span 
                          style={{ color: '#FFC83D', fontSize: '40px',  cursor: 'pointer'}}
                          onClick={() => setRate(i)}
                          >☆</span>)
     }
   }
   return startsTab;
}


    return (
        <div>
                   {/* --------------------------- bouton add ------------------------- */}

                <button class="glow-on-hover" type="button" onClick={handleShow}>ADD NEW MOVIE</button>
                
                   {/* --------------------------- modal add ------------------------- */}
                <Modal show={show} onHide={handleClose} >
                      <Modal.Body  className="my-modal"  >
                        <Modal.Title style={{color:'white' , marginBottom:'20px',fontSize:'50px'}} closeButton>Add movie</Modal.Title>

                           <div class="login-box" show={show} onHide={handleClose} >
  
                           <form>
                            <div style={{display:'flex' , justifyContent:'space-around',  width: '600px' }}>
                               <div class="user-box">
                                   <input 
                                   type="text" 
                                   name="title" 
                                   required
                                   value={title} onChange={(e) => setTitle (e.target.value)} />
                                   <label>title</label>
                               </div>
                               <div class="user-box">
                                 <input 
                                   type="text" 
                                   name="posterUrl" 
                                   required
                                   value={posterUrl} onChange={(e) => setPosterUrl (e.target.value)} />
                                   <label> posterUrl</label>
                               </div> 
                            </div>
                               <div class="user-box" style={{marginLeft:'100px'}}>
                                <textarea
                                   type="text" 
                                   name="description" 
                                   required
                                   rows="3"
                                   value={description} onChange={(e) => setDescription (e.target.value)} />
                                  <label>description</label>
                               </div>
                            <div style={{display:'flex' , justifyContent:'space-around', width: '600px'}}>
                               <div class="user-box">
                              <input 
                                   type="text" 
                                   name="director" 
                                   required
                                   value={director} onChange={(e) => setDirector (e.target.value)} />
                                <label>director</label>
                               </div>
                               <div class="user-box">
                               <input 
                                   type="text" 
                                   name="type" 
                                   required
                                   value={type} onChange={(e) => setType (e.target.value)} />
                                 <label> type</label>
                               </div>
                               <div class="user-box">
                               <input 
                                   type="text" 
                                   name="trailer" 
                                   required
                                   value={trailer} onChange={(e) => setTrailer (e.target.value)} />
                                 <label> trailer url</label>
                               </div>
                             </div>
                             <div style={{display:'flex' , justifyContent:'space-between',  width: '600px'}}>
                              <div class="user-box">
                             <input 
                                   type="text" 
                                   name="duration" 
                                   required
                                   value={duration} onChange={(e) => setDuration (e.target.value)} />
                               <label>duration</label>
                              </div>
                              <div class="user-box">
                               <input 
                                   type="number" 
                                   name="year" 
                                   required
                                   value={year} onChange={(e) => setYear (e.target.value)} />
                                 <label> year</label>
                              </div>
                           
                              <div class="user-box">
                               <input 
                                   type="text" 
                                   name="backImg" 
                                   required
                                   value={backImg} onChange={(e) => setBackImg (e.target.value)} />
                                 <label>background url</label>
                              </div>
                             </div>
                             <div style={{marginLeft : '200px'}}>
                             <div style={{marginLeft : '50px', color: '#03e9f4', fontSize: '30px'}}>rate</div>
                              <div > {stars (rate)}</div>
                              </div>
                             <a href="#"  onClick={handleAdd}>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                        Add
                              </a>
                              <a href="#" onClick={handleClose}>
                                   <span></span>
                                   <span></span>
                                   <span></span>
                                   <span></span>
                                         Close
                              </a>
                            </form>
                            </div>
                    </Modal.Body>
      
              </Modal>
        </div>
    )
}
export default AddMovie
