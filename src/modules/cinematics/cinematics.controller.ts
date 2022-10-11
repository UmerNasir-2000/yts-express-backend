import { Get, JsonController } from "routing-controllers";
import { Inject, Service } from "typedi";
import CinematicsService from "./cinematics.service";

@JsonController('/cinematics')
@Service()
class CinematicsController { 

    constructor(
        @Inject() private readonly cinematicsService: CinematicsService
    ) { }

    @Get('/movies')
    fetchMovies() { 

        return this.cinematicsService.printMessage();

    }

}

export default CinematicsController;