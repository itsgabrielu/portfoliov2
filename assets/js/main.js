
  function toggleModal () {
      $('.modal').toggleClass('show-modal')
      $('body').toggleClass('stop-scrolling')
  }

  const originalText = $('#textHover').text()

  function pls () {
    $('#textHover').text(originalText + ', pls')
  }

  function unPls () {
    $('#textHover').text(originalText)
  }

  function sound () {
    $('audio').toggleClass('show-audio')
  }

  // $('.textSound').click(sound())
  $('.navpic').click(sound)
  // function full () {
  //   $('.fullText').toggleClass('capitalize')
  // }
  // $('.fullText').mouseenter(full)
  // $('.fullText').mouseleave(full)

  $('#textHover').mouseenter(pls)
  $('#textHover').mouseleave(unPls)

  $('.trigger').click(toggleModal)
  $('.close-button').click(toggleModal)
