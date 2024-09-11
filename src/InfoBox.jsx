import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"

export default function InfoBox({Info}){
    
    let URL="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    return(
        <div className='InfoBox'>
            <h2>Weather Info</h2>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {Info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>city temp={Info.temp}</p>
          <p>city Maxtemp={Info.tempMin}</p>
          <p>city Mintemp={Info.tempMax}</p>
          <p>city humidity={Info.humidity}</p>
          <p>Feels like {Info.feelsLike}</p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    )
}