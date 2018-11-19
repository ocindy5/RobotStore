package com.ecommerce.micrommerce.model;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RobotRepository extends JpaRepository<Robot, Long> {
	    Robot findByName(String name);
}
