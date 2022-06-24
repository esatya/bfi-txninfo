import React, { useState } from 'react';
import './custom.css';

import { Card, CardBody, Row, Col, Table, CustomInput, CardTitle, Modal, ModalBody, Input, Button } from 'reactstrap';

import Balance from '../ui_components/balance';

export default function DetailsForm(props) {
	const [show, setShow] = useState(false);
	const toggleModal = () => setShow(!show);
	return (
		<>
			<Modal centered isOpen={show} toggle={toggleModal}>
				<ModalBody>
					<div className="mt-2">
						<h3 className="text-center">Transfer confirmation #</h3>
						<div className="mt-3">
							<Input type="name" name="name" placeholder="" />
						</div>
						<div className="text-center mt-3">
							<Button size="lg" className="btn-info">
								Submit
							</Button>
						</div>
					</div>
				</ModalBody>
			</Modal>
			<Row className="mt-4">
				<Col md="7">
					<Card>
						<div className="stat-card-body" style={{ minHeight: 120 }}>
							<CardTitle className="title" style={{ flexBasis: '70%' }}>
								Financial Service Provider Details
							</CardTitle>

							<Row>
								<Col md="12" sm="8" style={{ marginBottom: '10px' }}>
									<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
										<img
											src={'https://assets.rumsan.com/esatya/nabil-bank-logo.png'}
											alt="user"
											className="rounded-circle"
											width="45"
											height="45"
										/>
										<div style={{ marginLeft: '20px' }}>
											<p className="card-font-medium">Nabil Bank Limited</p>
											<div className="sub-title">Name</div>
										</div>
										<div style={{ marginLeft: '20px' }}>
											<p className="card-font-medium">Sanepa</p>
											<div className="sub-title">Branch</div>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Card>
				</Col>
				<Col md="5">
					<Balance action="" title="Beneficiaries" button_name="" handleIssueToken="" />
				</Col>
			</Row>
			<Row>
				<Col md="12">
					<Card>
						<div className="stat-card-body" style={{ minHeight: 120 }}>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<CardTitle className="title" style={{ flexBasis: '90%' }}>
									More Information
								</CardTitle>
								{/* <div style={{ flexBasis: '10%' }}>
									<button
										type="button"
										className="btn waves-effect waves-light btn-info"
										style={{ borderRadius: '8px' }}
									>
										Edit
									</button>
								</div> */}
							</div>
							<Row>
								<Col md="4" sm="12">
									<div className="card-data">
										<p className="card-font-medium">Flood Distribution</p>
										<div className="sub-title">Project Name</div>
									</div>
									<div className="card-data">
										<p className="card-font-medium">bank@nabil.com</p>
										<div className="sub-title">Email</div>
									</div>

									<div className="card-data">
										<p className="card-font-medium">Lalitpur Palika</p>
										<div className="sub-title">Agency/Palika Name</div>
									</div>
								</Col>
								<Col md="4" sm="12">
									<div className="card-data">
										<p className="card-font-medium">009333888388333</p>
										<div className="sub-title">Project Account Number</div>
									</div>
									<div className="card-data">
										<p className="card-font-medium">01-332332</p>
										<div className="sub-title">Phone Number</div>
									</div>
								</Col>
								<Col md="4" sm="12">
									<div className="card-data ">
										<p className="card-font-medium">18-07-2022</p>
										<div className="sub-title">Registration Date</div>
									</div>
								</Col>
							</Row>
						</div>
					</Card>
				</Col>
			</Row>
			<Row>
				<Col md="12">
					<Card>
						<CardBody>
							<CardTitle className="mb-0 p-3">
								<Row>
									<Col md="6">Beneficiary Details</Col>
									<Col md="6">
										<div
											style={{
												float: 'right',
												display: 'flex'
											}}
										>
											<CustomInput
												type="select"
												id="exampleCustomSelect"
												name="customSelect"
												defaultValue=""
												style={{ width: 'auto', marginRight: '5px' }}
											>
												<option value="phone">Filter By</option>
												<option value="name">Status</option>
											</CustomInput>
										</div>
									</Col>
								</Row>
							</CardTitle>
							<Table className="no-wrap v-middle" responsive>
								<thead>
									<tr className="border-0">
										<th className="border-0">Beneficiary</th>
										<th className="border-0">Account Number</th>
										<th className="border-0">Amount (Rs)</th>
										<th className="border-0">Transfer Date</th>
										<th className="border-0">Status</th>
										<th className="border-0">Action</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Nishu Bade Shrestha</td>
										<td>9874563210</td>
										<td>7894561230</td>
										<td>10/12/2080.</td>
										<td>Transfered</td>
										<td>
											<Button className="btn-info" onClick={toggleModal}>
												Confirm
											</Button>
										</td>
									</tr>
								</tbody>
							</Table>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	);
}
