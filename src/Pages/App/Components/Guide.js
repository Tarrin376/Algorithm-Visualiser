import '../Styles/Guide.css';
import { guideData } from '../services/GuideData';
import { useState } from 'react';

function Guide({ setGuideToggle }) {
    const [page, setPage] = useState(0);
    return (
        <div className="wrapperGuide">
            <div className="guide">
                <div id="exitGuide" onClick={() => setGuideToggle((guide) => !guide)}>X</div>
                <video key={guideData[page].src} autoPlay muted loop style={{borderRadius: '10px'}} id="guideVideo">
                    <source src={guideData[page].src} type="video/mp4"/>
                </video>
                <div className="guideButtons">
                    <button onClick={() => setPage((state) => (state > 0) ? state - 1 : 0)}>Back</button>
                    <button onClick={() => setPage((state) => (state < guideData.length - 1) ? state + 1 : page)}>Next</button>
                </div>
                <p style={{textAlign: 'center', marginTop: '30px', marginBottom: '30px', fontSize: '24px', color: 'black'}}>{guideData[page].title}</p>
                <p style={{color: 'black', marginLeft: '20px', marginRight: '20px', marginBottom: '20px', textAlign: 'center'}}>{guideData[page].desc}</p>
            </div>
        </div>
    );
}

export default Guide;