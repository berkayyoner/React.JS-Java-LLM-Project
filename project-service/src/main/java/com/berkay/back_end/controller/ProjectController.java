package com.berkay.back_end.controller;

import com.berkay.back_end.model.Project;
import com.berkay.back_end.repository.ProjectRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    private final ProjectRepository repo;
    public ProjectController(ProjectRepository repo) { this.repo = repo; }

    @GetMapping
    public List<Project> getAll() { return repo.findAll(); }

    @PostMapping
    public Project add(@RequestBody Project p) { return repo.save(p); }
}
