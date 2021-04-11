package com.example.js.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/n2021/")
public class N2021Controller {
	@GetMapping("learn/canvas1")
	public String LearnCanvas1() {
		return "view/n2021/canvas/learn_canvas1.html";
	}
	
	@GetMapping("learn/canvas2")
	public String LearnCanvas2() {
		return "view/n2021/canvas/learn_canvas2.html";
	}
	
	@GetMapping("learn/module")
	public String LearnModule() {
		return "view/n2021/learn_module.html";
	}
	
	@GetMapping("minigame/car-racer")
	public String CarRacer() {
		return "view/n2021/learn_module.html";
	}
}
