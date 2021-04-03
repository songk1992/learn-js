package com.example.js.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LearnCanvasController {
	@GetMapping("learn/canvas1")
	public String LearnCanvas1() {
		return "view/canvas/learn-canvas1.html";
	}
	
	@GetMapping("learn/canvas2")
	public String LearnCanvas2() {
		return "view/canvas/learn-canvas2.html";
	}
}
