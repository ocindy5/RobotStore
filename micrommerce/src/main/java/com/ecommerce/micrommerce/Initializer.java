package com.ecommerce.micrommerce;

import org.hibernate.validator.constraints.Length;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.ecommerce.micrommerce.model.Robot;
import com.ecommerce.micrommerce.model.RobotRepository;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Stream;

@Component
class Initializer implements CommandLineRunner {

    private final RobotRepository repository;

    public Initializer(RobotRepository repository) {
        this.repository = repository;
    }


    @Override
    public void run(String... strings) {
        Stream.of("Cook-it Robot", "Style-me Robot", "Homie Robot").forEach(name ->
                repository.save(new Robot(name))
        );
        Robot robot = repository.findByName("Cook-it Robot");
        robot.setPrice("1200");
        robot.setDescription("This robot can cook any dishes you want. Indeed, this little guy's got more than 500 incorporated recipes to suggest. You don't find the recipe you need?" +
                " You can easily download them from our online cooking book. You can switch Cook-it Robot to assistant mode if you want it to only perform specific tasks. " +
                "The interface also enables you to create different collections of recipes (e.g favorites, to do) and create your own! You can also share your recipes on the community forum" +
                " and help other robots lovers!");
        repository.save(robot);

        Robot robot2 = repository.findByName("Style-me Robot");
        robot2.setDescription("Are you craving for a new hair-style? That's now possible thanks to the Style-me Robot skills.Hair dyeing, new haircut, what would you like to change today?" +
                "Enjoy this robot's professional expertise from the comfort of your own house.You'll never have to go to the hair dresser again. Style-me Robot can smooth or curl your hair " +
                "according to your desires and moods, just take a sit and... relax ! ");
        robot2.setPrice("800");

        repository.save(robot2);

        Robot robot3 = repository.findByName("Homie Robot");
        robot3.setPrice("1200");
        robot3.setDescription("Are you sometimes fed up with everyday things? With Homie Robot you'll never be alone to face everyday challenges anymore. Will you cry when you'll watch Titanic for the " +
                "fiftieth time and realize that it still ends the same way when you prayed for hours to spare Jack? Of course you will. But you won't be alone, Homie Robot can help you find your" +
                " way through it. Jokes, tears drying, story telling (with happy endings), chest playing, Homie robot has more than one trick up his sleeves." +
                " Homie Robot has deep knowledge in a lot of fields: physics, mathematics, astronomy, computing,... and can share all of it with you at any time. Your wish is his command! ");
        repository.save(robot3);

        repository.findAll().forEach(System.out::println);
    }

	private List<Robot> initializeRobot() {
		List<Robot> robots = new ArrayList<Robot>();
		Robot r1 = new Robot();
		return null;
	}
}
