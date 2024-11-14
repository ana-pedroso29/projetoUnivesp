package com.Java.AmaPatas.Strategies;

import java.util.List;

public interface IStrategy<T>{
    List<T> process(T t);
}
