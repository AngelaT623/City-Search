import React, { Component } from 'react';
import {
	Row,
	Container,
	Card,
	Col,
	ListGroup,
	ListGroupItem,
} from 'react-bootstrap';

let listGroupItemStyle = {
	border: 'none',
};

class Scores extends Component {
	render() {
		let scoreItems;
		if (this.props.scores) {
			scoreItems = this.props.scores.map((score) => {
				let color = score.color;

				let categories = score.name;

				let out_of_10 = score.score_out_of_10;

				return (
					<Card accordion='true' key={color} eventKey={color}>
						<Card.Heading style={{ color: color }}>
							<Card.Title toggle>{categories}</Card.Title>
						</Card.Heading>
						<Card.Body collapsible>
							<Container>
								<Row>
									<Col xs={8} md={8} lg={8}>
										<ListGroup style={{ color: color }}>
											<ListGroupItem style={listGroupItemStyle}>
												<span className='font-weight-bold'>
													Score (out of 10):{' '}
												</span>
												{out_of_10}
											</ListGroupItem>
										</ListGroup>
									</Col>
								</Row>
							</Container>
						</Card.Body>
					</Card>
				);
			});
		}

		return (
            <div className='categoryItems'>
                {scoreItems}
            </div>
        );
	}
}

export default Scores;
