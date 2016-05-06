#The Pragmatic Programmer: From Journeyman to Master


#Dependency control

Couping, Cohesion, SL, IoC, DI, DIP, Abstract factory and method

##Couping
Coupling (also known as Dependency) is a degree to which one program unit (e.g., a class, module, subsystem) relies on other units. It is a measure of strength of the interconnections between elements, which should be minimized.

>We want elements that are independent of each other. In other words, we want to develop applications that exhibit loose (rather than tight) coupling.

However, since parts need to communicate among themselves, we do not have completely independent modules. As interconnections grow between the parties involved, one module will need more information about the other, increasing the dependency between them.

##Cohesion
Cohesion in software engineering is the degree to which the elements of a certain module belong together(in our case that we are going to discuss here we are mostly interested in classes, so module = class, unless otherwise noted). Thus, it is a measure of how strongly related each piece of functionality expressed by the source code of a software module is.

Cohesion is a measure of responsibility and focus of an application component. It is the degree to which the elements of a module belong together, which should be maximized.

>We want strong-related responsibilities in a single component. Thus, we want to develop highly cohesive code.

In a highly cohesive code, all data, methods and responsibilities are kept close. Services tend to be similar in many aspects.

A simple and intuitive way to test the cohesion of a class is to check if all the data and methods that it contains have a close relationship with the class name. Considering this, you should be aware that generic class names tend to generate cohesion problems, because they can get many different responsibilities over time. In fact, classes that have a vague name might one day become god objects (an anti-pattern that defines an “all-knowing” object that contains tons of features and services with many different purposes, which dramatically compromises cohesion and coupling of components).

##S.O.L.I.D
###Single responsibility principle

The single responsibility principle states that every object should have a single responsibility, and that responsibility should be entirely encapsulated by the class.

There should never be more than one reason for a class to change.





# Simple standarts

KISS, DRY, YAGNI and etc.

# Unit testing, TDD

Module and integration tests, test driven development 
> Arrange-Act-Assert - A-A-A




#Separation of concern

#Dependency Injection on .NET