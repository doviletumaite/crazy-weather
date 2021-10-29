import { useState } from "react"
import { Col, Form } from "react-bootstrap";
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
    return(
        <div>
          <Col xs={10} className="mx-auto my-5">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="Search a City!" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
    
            <p>{data.elements.base}</p>
            <p>{data.elements.weather[0].description}</p>
            
        </Col>
        </div>
    )
}
export default HomeSearch