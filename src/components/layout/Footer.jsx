import React from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Imagecompany } from '../ui/Imagecompany'
import { useSelector } from 'react-redux';
export function Footer() {
    const { data } = useSelector((state) => state.page);
    return (
        <footer id="footer">
            <Row className='text-center'>
                <Col sm={12} className='mt-4 mb-2' >
                    <Image width={170} src={data.logoPrincipal}/>
                </Col>
                <Col sm={6} className='text-sm-end px-5'>
                    <small className='conditions'>
                        <Link to='/terms'>
                            Términos y condiciones
                        </Link>
                    </small>
                </Col>
                <Col sm={6} className='text-sm-start px-5'>
                    <small className='conditions'>
                        <Link to='/policy'>
                            Política de Privacidad
                        </Link>
                    </small>
                </Col>
                <Col sm={12} className='my-1'>
                    <h6>
                        © 2023 {import.meta.env.VITE_REACT_APPLICATION_NAME}
                    </h6>
                </Col>
            </Row>
        </footer>
    )
}
