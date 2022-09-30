import LoadingVid from '../../../Images/loading.webp';

function Loading() {
  return (
    <div className="loadingContainer">
      <img src={LoadingVid} alt="loading" style={{width: '450px'}}/>
    </div>
  );
}

export default Loading;