import re

with open('d:/files/portfolio/animated.html', 'r', encoding='utf-8') as f:
    content = f.read()

html_end = content.find('</html>')
if html_end != -1:
    content = content[:html_end + 7]

new_css = '''
  /* SECTION 5 SCROLL HORIZONTAL PINNED GALLERY (Framer Motion style) */
  .cert-gallery-container {
    position: relative;
    width: 100%;
    overflow: hidden;
    padding-top: 10px;
    margin-top: 20px;
  }
  .cert-gallery {
    display: flex;
    gap: 24px;
    will-change: transform;
    padding-bottom: 24px;
  }
  .cert-gallery-item {
    flex: 0 0 220px;
    height: 150px;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    background: var(--hue-1);
    border: 1px solid rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
    box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.35);
    border-top: 3px solid #FF7FA6;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 16px;
  }
  .cert-gallery-item:nth-child(1) { background: var(--hue-1); border-top: 3px solid #FF7FA6; }
  .cert-gallery-item:nth-child(2) { background: var(--hue-2); border-top: 3px solid #4FB5A8; }
  .cert-gallery-item:nth-child(3) { background: var(--hue-3); border-top: 3px solid #F0A94E; }
  .cert-gallery-item:nth-child(4) { background: var(--hue-4); border-top: 3px solid #B8A4D9; }
  .cert-gallery-item:nth-child(5) { background: var(--hue-5); border-top: 3px solid #D9B8E8; }
  .cert-gallery-item:nth-child(6) { background: var(--hue-6); border-top: 3px solid #FFC98B; }
  .cert-gallery-item:nth-child(7) { background: var(--hue-1); border-top: 3px solid #FF7FA6; }

  .cert-gallery-item:hover {
    transform: translateY(-5px);
    border-color: var(--item-color);
    box-shadow: 0 20px 48px -10px rgba(0, 0, 0, 0.5);
  }
  .cert-item-content {
    position: relative;
    z-index: 2;
  }
  .cert-item-number {
    font-size: 0.75rem;
    color: var(--item-color);
    font-family: 'JetBrains Mono', monospace;
    font-weight: 800;
    display: block;
    margin-bottom: 4px;
    letter-spacing: 1.5px;
  }
  .cert-gallery-item h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 3px 0;
    line-height: 1.35;
  }
  .cert-gallery-item p {
    font-size: 0.78rem;
    color: rgba(255, 255, 255, 0.75);
    margin: 0;
  }
'''

css_pattern = re.compile(r'/\* CERTIFICATES SECTION NEW STYLES \*/.*?@media \(max-width: 600px\) \{ \.cert-grid-new \{ grid-template-columns: 1fr; \} \}', re.DOTALL)
content = css_pattern.sub(new_css.strip(), content)

new_html = '''<!-- CERTIFICATES -->
  <section class="scene-section" id="certificates">
    <div class="content-card" style="max-width: 1040px;">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 20px;">
        <div>
          <span class="eyebrow">05 — Certificates &amp; Workshops</span>
          <h2 style="font-size: clamp(1.8rem, 3.5vw, 2.5rem); margin: 2px 0 0; color: #ffffff;">Top Certifications</h2>
        </div>
      </div>

      <div class="cert-gallery-container">
        <div class="cert-gallery" id="certGalleryTrack">
          <div class="cert-gallery-item" style="--item-color: #FF7FA6;">
            <div class="cert-item-content">
              <span class="cert-item-number">01</span>
              <h3>Internship Certification — Razz Security</h3>
              <p>Vulnerability Assessment &amp; VAPT Training</p>
            </div>
          </div>

          <div class="cert-gallery-item" style="--item-color: #4FB5A8;">
            <div class="cert-item-content">
              <span class="cert-item-number">02</span>
              <h3>AWS Academy — ML Foundations</h3>
              <p>AWS Cloud Machine Learning Curriculum</p>
            </div>
          </div>

          <div class="cert-gallery-item" style="--item-color: #F0A94E;">
            <div class="cert-item-content">
              <span class="cert-item-number">03</span>
              <h3>Generative AI Leader — Google Cloud</h3>
              <p>Generative AI Leadership Program</p>
            </div>
          </div>

          <div class="cert-gallery-item" style="--item-color: #B8A4D9;">
            <div class="cert-item-content">
              <span class="cert-item-number">04</span>
              <h3>Deep Learning — Google Cloud</h3>
              <p>Advanced Vision &amp; Deep Learning Models</p>
            </div>
          </div>

          <div class="cert-gallery-item" style="--item-color: #D9B8E8;">
            <div class="cert-item-content">
              <span class="cert-item-number">05</span>
              <h3>Ethical Hacking — Udemy</h3>
              <p>Cybersecurity Penetration Testing</p>
            </div>
          </div>

          <div class="cert-gallery-item" style="--item-color: #FFC98B;">
            <div class="cert-item-content">
              <span class="cert-item-number">06</span>
              <h3>Machine Learning — Infosys</h3>
              <p>Predictive Analytics &amp; Data Models</p>
            </div>
          </div>

          <div class="cert-gallery-item" style="--item-color: #FF7FA6;">
            <div class="cert-item-content">
              <span class="cert-item-number">07</span>
              <h3>Snowflake — Data Warehousing</h3>
              <p>Cloud Data Warehousing &amp; ETL Systems</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>'''

html_pattern = re.compile(r'<!-- CERTIFICATES -->\s*<section class="scene-section" id="certificates">.*?</section>', re.DOTALL)
content = html_pattern.sub(new_html, content)

with open('d:/files/portfolio/animated.html', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
