import { useState } from "react"
import { Col, Form, Card} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";
import { fetchData } from "../store/actions";
import "./style/HomeSearch.css"

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
  
    return(
        <div>
          <Col xs={10} className="mx-auto my-5">
          <Form onSubmit={handleSubmit}>
          <Form.Label>Check the weather in your city!</Form.Label>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="Search a City!" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          
  <Link to="/details">
  <Card.Header className="Title">today's weather in {data.elements.name} ({data.elements.sys.country})</Card.Header>
 </Link>
        </Col>
        </div>
    )
}
export default HomeSearch