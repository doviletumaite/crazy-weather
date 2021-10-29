import { useState } from "react"
import { Col, Form, Card} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../store/actions";

const HomeSearch = () => {
    const [query, setQuery] = useState("")
    
    const dispatch = useDispatch()
    const data = useSelector((s)=> s.data)

    const endPoint = process.env.REACT_APP_API_BASE_URL + query + "&appid=" + process.env.REACT_APP_API_KEY
    const handleChange = (e)=>{
        setQuery(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        dispatch(fetchData(endPoint))
        console.log("data fetched in home", data.elements)
    }
    const celsius = parseInt(data.elements.main.temp - 273)
    const celsiusPerceved = parseInt(data.elements.main.feels_like - 273)
    const celsiusMax = parseInt(data.elements.main.temp_max - 273)
    const celsiusMin = parseInt(data.elements.main.temp_min - 273)

    return(
        <div>
          <Col xs={10} className="mx-auto my-5">
          <Form onSubmit={handleSubmit}>
          <Form.Label>Check the weather in your city!</Form.Label>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="Search a City!" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
            <Card>
  <Card.Header>today's weather in {data.elements.name} ({data.elements.sys.country})</Card.Header>
  <Card.Body>
    <Card.Title>{data.elements.weather[0].main}</Card.Title>
    <Card.Text>
    {data.elements.weather[0].description}
    <br></br>
    Humidity: {data.elements.main.humidity}%
    <br></br>
    Temperature: {celsius} °C 
    <br></br>
    Perceived temperature {celsiusPerceved} °C
    <br></br>
    Max temperature {celsiusMax} °C
    <br></br>
    Min temperature {celsiusMin} °C
    <br></br>
    Wind speed: {data.elements.wind.speed} m/s
    </Card.Text>
  </Card.Body>
</Card>
        </Col>
        </div>
    )
}
export default HomeSearch