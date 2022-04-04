import { Component } from 'react'
import { Outlet, useParams } from 'react-router-dom'

import * as petsService from '../../services/petsService'

import PetCard from '../PetCard/PetCard'
import withRouter from '../withRouter'
import CategoryNavigation from './CategoryNavigation/CategoryNavigation'

class Categories extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pets: []
        }


    }

    componentDidMount() {
        petsService.getAll()
            .then(res => this.setState({ pets: res }))

        // const number = Math.random();
        // console.log('The number is: ', number);

        // if (number > 0.7) {

        //     throw new Error('Something is messsed up!')
        // }
    }

    componentDidUpdate(prevProps) {
        let { category } = this.props.params;

        if (prevProps.params.category == this.props.params.category) {
            return
        }

        petsService.getAll(category)
            .then(res => {
                this.setState({ pets: res })
            })

    }

    increaseLikes(petId, likes) {
        let increasedLikes = likes + 1;

        petsService.updateCounter(petId, increasedLikes)
            .then(updatedPet => {
                this.setState(oldState => ({ pets: (oldState.pets.map(x => x.id === petId ? { ...x, likes: updatedPet.likes } : x)) }))
                // setPet(oldState => ({ ...oldState, likes: incrementedLikes }))
            })
    }

    render() {
        return (
            <>
                <section className="basic">
                    <h1> Welcome to pet my pet!</h1>
                </section>
                <section className="dashboard">
                    <h1>Dashboard</h1>

                    <CategoryNavigation />
                    {/* <Outlet /> */}

                    <ul className="other-pets-list">

                        {this.state.pets.map(p => <PetCard
                            key={p.id}
                            pet={p}
                            increaseLikes={this.increaseLikes.bind(this, p.id, p.likes)}
                        />)}
                    </ul>
                </section>
            </>
        )
    }

}

export default withRouter(Categories)