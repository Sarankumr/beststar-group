import os

def create_simple_pdf(filename, title, subtitle, sections):
    # Builds a valid standard PDF 1.4 document
    lines = []
    lines.append("%PDF-1.4")
    lines.append("%\xe2\xe3\xcf\xd3")

    objects = []
    
    def add_obj(content):
        objects.append(content)
        return len(objects)

    # Object 1: Font
    font_obj_idx = add_obj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>")
    # Object 2: Bold Font
    font_bold_idx = add_obj("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>")

    # Content stream
    stream_lines = []
    stream_lines.append("BT")
    
    # Title
    stream_lines.append(f"/F2 20 Tf 50 780 Td ({title}) Tj")
    stream_lines.append("0 -24 Td")
    stream_lines.append(f"/F1 11 Tf ({subtitle}) Tj")
    stream_lines.append("0 -18 Td")
    stream_lines.append("/F2 9 Tf (BEST STAR GROUP FZE - CORPORATE LEGAL DIRECTORATE | DUBAI & SHARJAH, UAE) Tj")
    stream_lines.append("0 -24 Td")
    
    # Gold divider line simulation
    stream_lines.append("ET")
    stream_lines.append("q 0.72 0.53 0.15 rg 50 706 495 1.5 re f Q")
    stream_lines.append("BT")
    stream_lines.append("0 0 Td") # placeholder

    y_pos = 690
    for heading, paragraphs in sections:
        stream_lines.append(f"/F2 12 Tf 50 {y_pos} Td ({heading}) Tj")
        y_pos -= 16
        for p in paragraphs:
            stream_lines.append(f"/F1 9 Tf 50 {y_pos} Td ({p}) Tj")
            y_pos -= 14
        y_pos -= 8
        if y_pos < 80:
            break

    # Footer
    stream_lines.append(f"/F1 8 Tf 50 40 Td (Official Document - Best Star Group FZE Corporate Legal Registry - Conforming with UAE Federal Commercial Laws) Tj")
    stream_lines.append("ET")

    stream_content = "\n".join(stream_lines)
    stream_len = len(stream_content.encode('latin1'))

    # Object 3: Page content stream
    content_obj_idx = add_obj(f"<< /Length {stream_len} >>\nstream\n{stream_content}\nendstream")

    # Object 4: Page object
    page_obj_idx = add_obj(f"<< /Type /Page /Parent 5 0 R /MediaBox [0 0 595 842] /Contents {content_obj_idx} 0 R /Resources << /Font << /F1 {font_obj_idx} 0 R /F2 {font_bold_idx} 0 R >> >> >>")

    # Object 5: Pages object
    pages_obj_idx = add_obj(f"<< /Type /Pages /Kids [{page_obj_idx} 0 R] /Count 1 >>")

    # Object 6: Catalog object
    catalog_obj_idx = add_obj(f"<< /Type /Catalog /Pages {pages_obj_idx} 0 R >>")

    # Write file with xref table
    with open(filename, "wb") as f:
        offsets = []
        for line in lines:
            f.write((line + "\n").encode('latin1'))

        for i, obj_content in enumerate(objects):
            offsets.append(f.tell())
            f.write(f"{i + 1} 0 obj\n{obj_content}\nendobj\n".encode('latin1'))

        xref_pos = f.tell()
        f.write(f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n".encode('latin1'))
        for off in offsets:
            f.write(f"{off:010d} 00000 n \n".encode('latin1'))

        f.write(f"trailer\n<< /Size {len(objects) + 1} /Root {catalog_obj_idx} 0 R >>\nstartxref\n{xref_pos}\n%%EOF\n".encode('latin1'))

# 1. Terms & Conditions PDF
terms_sections = [
    ("1. Corporate Identification and Free Zone Jurisdiction", [
        "Best Star Group FZE is an authorized multi-sector holding enterprise incorporated in the United Arab Emirates.",
        "Operations comply with UAE Federal Decree laws, Hamriyah Free Zone, and SAIF Zone commercial regulations.",
        "Subsidiaries operate under relevant commercial licensing including UAE MOHAP and ASNT certifications."
    ]),
    ("2. Commercial Engagements, Tenders & RFP Submissions", [
        "All proposals, commercial terms, and RFP inquiries submitted via this portal are treated as privileged business communication.",
        "Formal contract execution is subject to bilateral corporate ratification and legal review by group counsel.",
        "Technical and commercial milestones are bound by individual subsidiary Service Level Agreements (SLAs)."
    ]),
    ("3. Intellectual Property, Trademarks & Trade Crests", [
        "The Best Star Group official emblem, 24K gold crest, subsidiary hallmarks, and digital assets are registered IP.",
        "Unauthorized reproduction, digital mirroring, or commercial misappropriation is strictly prohibited by UAE Copyright Law.",
        "All corporate disclosures and technical whitepapers remain the proprietary intellectual property of the group."
    ]),
    ("4. Fiduciary Governance, Limitation of Liability & Warranties", [
        "Information published on this corporate portal is provided with utmost fiduciary accuracy and executive transparency.",
        "Best Star Group disclaims liability for indirect, incidental, or third-party interpretations of forward-looking horizon targets.",
        "Disputes arising shall be subject to the exclusive jurisdiction of the competent civil courts of Dubai, UAE."
    ])
]

create_simple_pdf(
    "public/docs/Best-Star-Group-Terms-and-Conditions.pdf",
    "BEST STAR GROUP FZE - OFFICIAL TERMS & CONDITIONS",
    "Corporate Governance, Commercial Regulatory Framework & Website Terms",
    terms_sections
)

# 2. Privacy Policy PDF
privacy_sections = [
    ("1. Data Controller Identification and Regulatory Scope", [
        "Best Star Group FZE acts as the sovereign data controller for personal and corporate data collected across this portal.",
        "We adhere to UAE Federal Decree-Law No. 45/2021 regarding Personal Data Protection (PDPL) and GDPR best practices.",
        "Data collection applies to commercial RFPs, executive candidate dossiers, media inquiries, and investor relations."
    ]),
    ("2. Categories of Information Collected & Lawful Basis", [
        "Candidate Data: Full legal name, curriculum vitae, professional licensing credentials, and contact coordinates.",
        "Commercial Data: Enterprise registration, project scopes, procurement tenders, and institutional banking details.",
        "Digital Telemetry: IP addresses, browser encryption handshakes, language preferences, and audit session telemetry."
    ]),
    ("3. Information Security, Encryption Protocols & Data Sovereignty", [
        "All transmitted information is safeguarded utilizing enterprise-grade TLS 1.3 cryptographic protocols.",
        "Stored records are encrypted at rest with AES-256 standard within secure regional cloud and local infrastructure.",
        "Under no circumstances does Best Star Group sell, monetize, or disclose candidate or client information to third parties."
    ]),
    ("4. Data Subject Rights & Dedicated Data Protection Officer (DPO)", [
        "Individuals possess the statutory right to request access, rectification, or complete erasure of their submitted data.",
        "Official inquiries regarding data sovereignty may be directed to our Data Protection Office at compliance@beststargroup.com.",
        "All verified data access requests are formally addressed within 15 business days under UAE PDPL guidelines."
    ])
]

create_simple_pdf(
    "public/docs/Best-Star-Group-Privacy-Policy.pdf",
    "BEST STAR GROUP FZE - DATA PRIVACY & SOVEREIGNTY POLICY",
    "Compliance with UAE Federal Decree-Law No. 45/2021 on Personal Data Protection",
    privacy_sections
)

print("PDFs generated successfully!")
