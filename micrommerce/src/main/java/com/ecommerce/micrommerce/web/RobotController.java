package com.ecommerce.micrommerce.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ecommerce.micrommerce.model.Robot;
import com.ecommerce.micrommerce.model.RobotRepository;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
class RobotController {

    private final Logger log = LoggerFactory.getLogger(RobotController.class);
    private RobotRepository robotrepository;

    public RobotController(RobotRepository robotRepository) {
        this.robotrepository = robotRepository;
    }

    @GetMapping("/robots")
    Collection<Robot> robots() {
        return robotrepository.findAll();
    }

    @GetMapping("/robots/{id}")
    ResponseEntity<?> getRobot(@PathVariable Long id) {
        Optional<Robot> robot = robotrepository.findById(id);
        return robot.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/robots")
    ResponseEntity<Robot> createRobot(@Valid @RequestBody Robot robot) throws URISyntaxException {
        log.info("Request to create robot: {}", robot);
        Robot result = robotrepository.save(robot);
        return ResponseEntity.created(new URI("/robots/" + result.getId()))
                .body(result);
    }


    @RequestMapping(path="/robots/{id}",method=RequestMethod.DELETE)
    ResponseEntity<?> deleteRobot(@PathVariable Long id) {
        log.info("Request to delete robot: {}", id);
        robotrepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}