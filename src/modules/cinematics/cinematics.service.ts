import { Service } from "typedi";

@Service()
class CinematicsService {

  printMessage() {
    return { message: 'Initial Cinematics' }
  }


}

export default CinematicsService;