package com.example.js.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LearnCanvasController {
	@GetMapping("learn/canvas")
	public String LearnCanvas() {
		return "view/canvas/learn-canvas1.html";
	}
}
