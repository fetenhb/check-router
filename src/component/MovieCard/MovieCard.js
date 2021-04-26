import React from 'react'
import './MovieCard.scss'
import Rate from '../Rate'
import { Link } from 'react-router-dom';

const MovieCard = ({el : {title , posterUrl,year, duration , type, director  ,description, trailer, rate, backImg}}) => {
  console.log({title})

    return (
        
      <Link to={`/movie/${title}`} style={{textDecoration:'none'}}> 

              <div className="bd">
          {/* --------------------------- card ------------------------- */}
                <div class="movie_card" id="bright">
                  <div class="info_section">
                      <div class="movie_header">
                        <img class="locandina" src=  {posterUrl}/>
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                        <h1>{title}</h1>
                        <div style={{marginTop:'-30px'}}>
                        <Rate rate={rate} />
                        </div>
                        </div>
                        <h4>{year}, {director}</h4>
                       
                        <span class="minutes">{duration}</span>
                        <p class="type">{type}</p>
                      </div>
                      <div class="movie_desc">
                        <p class="textt">
                        {description}
                        </p>
                      </div>
                      <div style={{display:'flex' , width:'100%' , marginTop:'-10px'}}>
                      <div class="movie_social" >
                        <ul>
                                            <li><i class="material-icons">share</i></li>
                                            <li><i class="material-icons"></i></li>
                                            <li><i class="material-icons">chat_bubble</i></li>
                        </ul>
                        

                      </div >
        
                </div>
                </div>
               {/* --------------------------- background card ------------------------- */}

         <div class="blur_back" style={{  backgroundImage: `url(${ backImg})`, backgroundSize: 'cover',  backgroundRepeat: 'no-repeat',height: '100%' }}></div>

         </div>
     </div>
     </Link>
    )
}

export default MovieCard
