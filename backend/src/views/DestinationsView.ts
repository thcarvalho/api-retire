import Destinations from '../models/Destinations';
import ImagesView from './ImagesView';

export default {
  render(destination: Destinations) {
    return {
      id: destination.id,
      name: destination.name,
      phone: destination.phone,
      email: destination.email,
      opening_hours: destination.opening_hours,
      address: destination.address,
      cep: destination.cep,
      latitude: destination.latitude,
      longitude: destination.longitude,
      images: ImagesView.renderMany(destination.images)
    }
  },

  renderMany(destinations: Destinations[]) {
    return destinations.map(destination => this.render(destination));
  }
}