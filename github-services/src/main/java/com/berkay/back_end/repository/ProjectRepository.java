package com.berkay.back_end.repository;

import com.berkay.back_end.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {}
