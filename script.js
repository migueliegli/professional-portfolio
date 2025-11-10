// Professional Portfolio Interactivity
document.addEventListener('DOMContentLoaded', function() {

    // LinkedIn Button Interaction
    const linkedinBtn = document.getElementById('linkedinBtn');
    if (linkedinBtn) {
        linkedinBtn.addEventListener('click', function(e) {
            // Optional: Add confirmation before redirecting
            if (!confirm('You will be redirected to my LinkedIn profile. Continue?')) {
                e.preventDefault();
            }
        });
    }

    // Quiz Interaction
    const quizBtn = document.getElementById('checkQuiz');
    if (quizBtn) {
        quizBtn.addEventListener('click', function() {
            alert('Quiz answers:\n\n1) 193 countries\n2) 1997\n\nThank you for testing your knowledge about chemical disarmament!');
            this.textContent = 'Answers Revealed!';
            this.classList.add('btn-success');
            setTimeout(() => {
                this.textContent = 'Check Answers';
                this.classList.remove('btn-success');
            }, 3000);
        });
    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Professional console message
    console.log('🔬 Carlos Miguel Iegli da Silva - Chemical Security Portfolio Loaded');
    console.log('🌍 Bridging engineering excellence with global security initiatives');
    console.log('🤖 Exploring AI applications for chemical disarmament and safety');
});
