package com.pavlinpanev.studentsystem.service;

import com.pavlinpanev.studentsystem.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
}
