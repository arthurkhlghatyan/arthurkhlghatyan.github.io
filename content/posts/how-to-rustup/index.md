---
title: How to get started with Rust?
date: "2020-08-16T15:35:00.121Z"
draft: false
slug: "/how-to-rustup"
category: "Rust"
description: My way of becoming Rustacean
tags:
  - "Rust"
  - "CS"
  - "Review"
socialImage: "/media/how-to-rustup.jpg"
template: "post"
---
- [Intro](#intro)
- [The Book](#the-book)
- [Rustlings](#rustlings)
- [What's next](#whats-next)

![Rusty lock](./stock-photo.jpg)

## Intro
Before launching [Rust Community Armenia](https://t.me/rustarmenia), I decided to write a short article giving the reader a clear path to becoming a [rustacean](https://www.rustaceans.org/).

Instead of talking about killer features of the language, I will show you that whether you're searching for a good book or a good set of exercises to get used to writing rust code rustaceans got you covered and its easier to learn the language than you could imagine.

So let's go ahead and review some nice things out there!

## The Book
[The Rust Book](https://doc.rust-lang.org/book/) is where your journey starts!

What I mostly like about it is that its free from formal definitions and all topics are explained in the simplest possible way usually combined with real-world examples which clearly answers the most popular question every programmer asks after studying a tough topic - Why the hell I would use that? (I was asking this when reading about lifetimes :) 

After going through 20 chapters of the book you will get familiar with the most thought-provoking concepts of the language and even build a [multithreaded web server](https://doc.rust-lang.org/book/ch20-00-final-project-a-web-server.html) at the end. For me, getting such a low-level control over connection streams and threading was an amazing and challenging experience, cause all such things are mostly done internally in Node.

## Rustlings
So here we are you've read the book and ready to move on.

If you think you fully got the ownership and lifetime rules don't worry there's still a lot of work to do. And here's where [rustlings](https://github.com/rust-lang/rustlings) comes to help. It's a tool containing various helpful exercises to get you used to writing rust and reading others code which can seem awful at first IMHO.

I personally recommend working on exercises after reading the book as a review process, because each chapter contains links to the related topic from the book so you can come back and strengthen your skills in a such way. 

*Below is a bash code snippet to install and run rustlings on Linux/macOS.*

```bash
export DIR=/path/to/download && \
curl -L https://git.io/rustlings | bash -s $DIR && \
cd $DIR && \
rustlings watch
```

Additionally, you may also use [CodeSignal](https://codesignal.com/) as part of your exercise routine. After doing some research I've found it to be one of the few platforms to fully support rust (HackerRank does also, but I've seen some tasks in which the language is not available).

## What's next
Hooray! What a road it's been. If I'm assuming right you went through everything mentioned above. Skilled and ready to hack, huh? Now it's the right time to carefully study the [use cases](https://www.rust-lang.org/what) of rust. As a web dev at heart, I chose to go with WebAssembly.

By the time of writing Rust is not in [good shape](https://twitter.com/rustlang/status/1294024734804508679) in terms of job availability but don't worry, it's all good! A lot of companies start using it so I'm sure you will find your place as well. So keep hacking! And remember [#DontPlayJobSafe]() - that's the key and always will be!

So far, this is it. These resources should be a good getting started point. For the next part, you may expect my thoughts about WebAssembly or my vision for Rust Community Armenia. Let's see what happens.

Best of luck and thank you!

**Note**: *This article is written from the JS dev perspective who's passionate about rust. You may not agree with some of the advice given, feel free to propose yours in the community [chat](https://t.me/rustarmenia).*


